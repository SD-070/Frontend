import { useState } from 'react';

export default function Counter({ count, setter }) {
  return (
    <div style={{ display: 'flex', margin: '1rem', gap: '.5rem' }}>
      <button type='button' onClick={() => setter((c) => c - 1)}>
        -
      </button>

      <p>{count}</p>

      <button type='button' onClick={() => setter((previous) => previous + 1)}>
        +
      </button>
    </div>
  );
}
