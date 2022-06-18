import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import countryList from '../country.json';
import Card from './Card';

const flags = require.context('../assets/flags', false, /\.svg$/);
const countriesWFlag = countryList
  .filter((country) => country.iso)
  .map((country) => ({
    ...country,
    flag: flags(`./${country.code}.svg`),
  }));

const selectedCountries = countriesWFlag
  .map((country) => country.code)
  .sort(() => Math.random() - 0.5)
  .splice(countriesWFlag.length - 20);

if (!selectedCountries.includes('in')) {
  selectedCountries.push('in');
}

function CardsWrapper({ setScore }) {
  // previous selected countries
  const [prevSelected, setPrevSelected] = React.useState([]);
  // current selected countries
  const [selected, setSelected] = React.useState('');
  const [countryElements, setCountryElements] = React.useState([]);
  const CountryCards = countriesWFlag
    .filter((country) => selectedCountries.includes(country.code))
    .map((country) => (
      <Card
        key={country.code}
        code={country.code}
        name={country.name}
        flag={country.flag} // could spread the object here but eslint complains
        onClick={() => setSelected(country.code)}
      />
    ));
  useEffect(() => {
    setCountryElements(
      CountryCards.filter((country) => country.key !== selected).sort(
        () => Math.random() - 0.5
      )
    );
  }, [prevSelected]);

  useEffect(() => {
    if (prevSelected.includes(selected)) {
      setScore(0);
      setPrevSelected([]);
      setSelected('');
    } else {
      setPrevSelected([...prevSelected, selected]);
      setScore(prevSelected.length);
    }
  }, [selected]);

  return <div className="cards-wrapper">{countryElements}</div>;
}

CardsWrapper.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default CardsWrapper;
