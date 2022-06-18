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
  const [selected, setSelected] = React.useState({});
  const [countryElements, setCountryElements] = React.useState([]);

  const handleClick = (e, code) => {
    setSelected({ code, element: e.target.closest('.card') });
  };

  const CountryCards = countriesWFlag
    .filter((country) => selectedCountries.includes(country.code))
    .map((country) => (
      <Card
        key={country.code}
        code={country.code}
        name={country.name}
        flag={country.flag} // could spread the object here but eslint complains
        onClick={(e) => handleClick(e, country.code)}
      />
    ));

  useEffect(() => {
    setCountryElements(
      CountryCards.filter((country) => country.key !== selected.code).sort(
        () => Math.random() - 0.5
      )
    );
  }, [prevSelected]);

  useEffect(() => {
    const clearSuccess = document.querySelectorAll('.success');
    const clearFailed = document.querySelectorAll('.failed');

    clearSuccess.forEach((item) => {
      item.classList.remove('success');
    });

    clearFailed.forEach((item) => {
      item.classList.remove('failed');
    });

    if (prevSelected.includes(selected.code)) {
      selected.element.classList.add('failed');
      setTimeout(() => {
        setScore(0);
        setPrevSelected([]);
        setSelected({});
      }, 100);
    } else {
      if (selected.element) {
        selected.element.classList.add('success');
      }
      setTimeout(() => {
        setPrevSelected([...prevSelected, selected.code]);
        setScore(prevSelected.length);
      }, 100);
    }
  }, [selected.code]);

  return <div className="cards-wrapper">{countryElements}</div>;
}

CardsWrapper.propTypes = {
  setScore: PropTypes.func.isRequired,
};

export default CardsWrapper;
