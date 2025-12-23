import { useEffect, useState } from 'react';

export default function FetchOnStateChange() {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [url, setUrl] = useState('https://swapi.tech/api/people');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);

        if (!res.ok) throw new Error('Fetch failed');

        const data = await res.json();

        setPeople(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  console.log('Prev: ', prevUrl);
  console.log('Next:', nextUrl);

  const handleNext = () => setUrl(nextUrl);
  const handlePrev = () => setUrl(prevUrl);

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans'>
      <h1 className='text-3xl font-bold text-center text-gray-300'>Star Wars Characters | Fetch on State Change</h1>

      <div className='flex justify-center gap-4 pt-6'>
        {prevUrl && (
          <button onClick={handlePrev} type='button'>
            Previous
          </button>
        )}
        {nextUrl && (
          <button onClick={handleNext} type='button'>
            Next
          </button>
        )}
      </div>

      {loading && <p className='text-center text-gray-600 font-medium'>Loading...</p>}

      {error && <p className='text-center text-red-500 font-semibold'>Sorry, try again later</p>}

      <ul className='grid sm:grid-cols-2 gap-4 mt-5'>
        {people?.map((person) => (
          <li key={person.uid} className='bg-white p-4 rounded shadow text-center capitalize'>
            <span className='font-semibold text-gray-800'>{person.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
