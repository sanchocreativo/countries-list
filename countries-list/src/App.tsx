import * as React from 'react';
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {

  const [id, setId] = React.useState('');
  const handleIdChange = React.useCallback((newId:string) => {
    setId(newId);
  }, []);

  const [continent, setContinent] = React.useState(['NA', 'SA', "OC", "EU", "AS", "AN", "AF"]);
  const handleContinentChange = React.useCallback((newId:any) => {
    setContinent(newId);
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <CountriesList handleIdChange={handleIdChange} code={continent} handleContinentChange={handleContinentChange} />
                <SingleCountry code={id} />
              </>
            }></Route>
            <Route path="/country/:countrycode" element={
              <>
                <CountriesList handleIdChange={handleIdChange}  code={continent} handleContinentChange={handleContinentChange} />
                <SingleCountry code={id} />
              </>
            }></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;