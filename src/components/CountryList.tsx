import CountryCard from './CountryCard';
import { CountryWithIsClicked } from '../types/Country.type';

interface Props {
  countries: CountryWithIsClicked[];
  setCountries: React.Dispatch<React.SetStateAction<CountryWithIsClicked[]>>;
  isClicked: boolean;
}

const CountryList = ({ countries, setCountries, isClicked }: Props) => {
  const toggleCountry = (selectedCountry: CountryWithIsClicked): void => {
    setCountries(
      countries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, isClicked: !country.isClicked }
          : country
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mt-12 mb-7">
        {isClicked ? 'Favorite Countries' : 'Countries'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries
          .filter((country) => country.isClicked === isClicked)
          .map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onClick={() => toggleCountry(country)}
              isClicked={country.isClicked}
            />
          ))}
      </div>
    </div>
  );
};

export default CountryList;
