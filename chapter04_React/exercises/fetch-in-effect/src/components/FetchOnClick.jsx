import { useCallback, useEffect, useState } from 'react';

export default function FetchOnClick() {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const [status, setStatus] = useState('loading');

  const fetchData = useCallback(async (url) => {
    try {
      setStatus('loading');
      const res = await fetch(url);
      if (!res.ok) throw new Error('Fetch failed');

      const data = await res.json();
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    fetchData('https://swapi.tech/api/people');
  }, [fetchData]);

  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

  return (
    <main className='min-h-screen  bg-gray-900 p-8 font-sans'>
      <h1 className='text-3xl font-bold text-center text-gray-300'>Star Wars Characters | Fetch on Click</h1>

      <div className='flex justify-center gap-4 pt-6'>
        {prevUrl && (
          <button type='button' onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type='button' onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {status === 'loading' && <p className='text-center text-gray-600 font-medium'>Loading...</p>}

      {status === 'error' && <p className='text-center text-red-500 font-semibold'>Sorry, try again :(</p>}

      <ul className='grid sm:grid-cols-2 gap-4'>
        {status === 'success' &&
          people?.map((person) => (
            <li key={person.uid} className='bg-white p-4 rounded shadow text-center capitalize'>
              <span className='font-semibold text-gray-800'>{person.name}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}
