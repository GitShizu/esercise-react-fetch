import { useEffect, useState } from 'react'
import './App.scss'
import SearchBar from './SearchBar';
import CountryCard from './CountryCard';



function App() {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleFetch = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setCountries(newData)
  }

  useEffect((() => { handleFetch('https://restcountries.com/v3.1/all') }), []);

  // useEffect((()=>{`https://restcountries.com/v3.1/name/${searchValue}`}), [searchValue])
  return (
    <section id='app-container'>
      <div>
        <SearchBar
          onChange={(newvalue) => setSearchValue(newvalue)}
          value={searchValue}
          onSearch={() => { handleFetch(`https://restcountries.com/v3.1/name/${searchValue}`) }}
        />
      </div>
      <div>
        {countries.map((country, i) => {
          const { name, capital, population, flags } = country;
          return (
            <CountryCard
              key={name.official}
              countryName={name.official}
              flagUrl={flags.png}
              population={population}
              capital={capital? capital : 'None'}
            />)
        })}
      </div>


    </section>
  )
}

export default App
