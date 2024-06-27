import { CountryWithIsClicked } from '../types/Country.type';

interface Props {
  country: CountryWithIsClicked;
  onClick: () => void;
  isClicked: boolean;
}

const CountryCard = ({ country, onClick, isClicked }: Props) => {
  // const handleClickCard = (selectedCountry: CountryWithIsClicked) => {
  //   // 클릭한 국가 카드가 이미 좋아요에 속해있는지 확인
  //   const isSelected = favoriteCountries.some(
  //     (country) => country.name.common === selectedCountry.name.common
  //   );

  //   if (isSelected) {
  //     setCountries((prev) => {
  //       return [...prev, selectedCountry];
  //     });
  //     setFavoriteCountries((prev) => {
  //       return prev.filter(
  //         (country) => country.name.common !== selectedCountry.name.common
  //       );
  //     });
  //   } else {
  //     setCountries((prev) => {
  //       return prev.filter(
  //         (country) => country.name.common !== selectedCountry.name.common
  //       );
  //     });
  //     setFavoriteCountries((prev) => {
  //       return [...prev, selectedCountry];
  //     });
  //   }
  // };


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
