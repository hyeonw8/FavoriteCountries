import { CountryWithIsClicked } from '../types/Country.type';

interface Props {
  country: CountryWithIsClicked;
  onClick: () => void;
  isClicked: boolean;
}

const CountryCard = ({ country, onClick, isClicked }: Props) => {

  return (
    <div
      onClick={onClick}
      className={`p-4 flex flex-col rounded-lg ${
        isClicked ? 'border border-green-500' : 'border-none'
      } bg-white border-solidgap-2 shadow-md hover:shadow-lg w-full`}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-20 h-[50px] mx-auto mb-4"
      />
      <p className="font-bold text-lg mb-3">{country.name.common}</p>
      <p>{country.capital ?? 'N/A'}</p>
    </div>
  );
};

export default CountryCard;
