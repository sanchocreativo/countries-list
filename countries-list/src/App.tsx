import * as React from 'react';
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';

import './App.css';

const App = () => {
  const [id, setId] = React.useState('');
  const handleIdChange = React.useCallback((newId:string) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <CountriesList handleIdChange={handleIdChange} />
      <SingleCountry code={id} />
    </div>
  );
};

export default App;