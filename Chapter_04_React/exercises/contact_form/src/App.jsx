import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   const field = event.target.name;
  //   setFormState((prev) => {
  //     return { ...prev, [field]: value };
  //   });
  // };

  const handleChange = (e) => setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <h1>Contact form</h1>

      <form
        style={{
          margin: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        onSubmit={handleSubmit}
      >
        {/* <label htmlFor='name'>Name</label> */}
        {/* <input type='text' name='name' id='name' value={name} onChange={(event) => setName(event.target.value)} /> */}
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={formState.name}
          // onChange={(e) =>
          //   setFormState((prev) => {
          //     return { ...prev, name: e.target.value };
          //   })
          // }
          onChange={handleChange}
        />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' value={formState.email} onChange={handleChange} />

        <label htmlFor='phone'>Phone</label>
        <input type='tel' name='phone' id='phone' value={formState.phone} onChange={handleChange} />

        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message' value={formState.message} onChange={handleChange}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
