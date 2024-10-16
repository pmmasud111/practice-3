import { useEffect, useState } from "react";

export default function RestCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="grid grid-cols-4">
      {countries.map((country) => (
        <Country country={country} key={country.cca3} />
      ))}
    </div>
  );
}

function Country(props) {
  const {
    name,
    flags,
    capital,
    population,
    region,
    status,
    subregion,
    timezones,
  } = props.country;
  console.log(props.country);
  return (
    <div className="border-2 bg-gray-200 rounded-xl p-4 m-4 text-center">
      <h1 className="text-xl font-semibold">Country Name: {name.common}</h1>
      <p>City : {capital}</p>
      <img
        className="w-64 h-40 mx-auto m-2 rounded-xl"
        src={flags.png}
        alt=""
      />
      <p>population: {population}</p>
      <p>region: {region}</p>
      <p>status: {status}</p>
      <p>subregion: {subregion}</p>
      <p>timezones: {timezones}</p>
    </div>
  );
}
