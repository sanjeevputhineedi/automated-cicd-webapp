import { useEffect, useState } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState('Checking API...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/health`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(() => setApiStatus('API connected'))
      .catch(() => setApiStatus('API unavailable'));
  }, []);

  return (
    <main className="shell">
      <p className="eyebrow">React + Express</p>
      <h1>Full-stack project ready.</h1>
      <p className="summary">A small starting point for building features, services, and automated delivery.</p>
      <div className="status" aria-live="polite">
        <span className={apiStatus === 'API connected' ? 'indicator online' : 'indicator'} />
        {apiStatus}
      </div>
    </main>
  );
}

export default App;