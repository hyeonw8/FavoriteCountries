import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { useEffect, useState } from 'react';
import { CountryWithIsClicked } from './types/Country.type';
import { AxiosError } from 'axios';
import { countryApi } from './api/countries';
import Layout from './components/common/Layout';
import CountryList from './components/CountryList';
import TopButton from './util/TopButton';

function App() {
  const [countries, setCountries] = useState<CountryWithIsClicked[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | AxiosError>(null);

  const getCountries = async (): Promise<void> => {
    try {
      const response = await countryApi.get<CountryWithIsClicked[]>('/all');
      const originalCountries: CountryWithIsClicked[] = response.data;
      const sortedCountries: CountryWithIsClicked[] = originalCountries.sort(
        (a, b) => a.name.common.localeCompare(b.name.common)
      );
      const countryWithIsClicked: CountryWithIsClicked[] = sortedCountries.map(
        (country) => ({
          ...country,
          isClicked: false,
        })
      );
      setCountries(countryWithIsClicked);
    } catch (error) {
      console.error('api 오류:', error);
      if (error instanceof AxiosError) {
        setError(error);
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 justify-center items-center ">
        <div className="text-xl flex flex-col p-4 justify-center items-center gap-2 bg-slate-200 shadow-md rounded-lg w-[400px] h-[80px]">
          <p className='font-semibold'>Favorite Countries</p>
          <p className='text-base'>250여개의 국가 데이터 로딩 중...🇰🇷</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return <div className="text-xl">에러가 발생했습니다: {error.message}</div>;
  }

  return (
    <>
      <Layout>
        <CountryList
          countries={countries}
          setCountries={setCountries}
          isClicked={true}
        />
        <CountryList
          countries={countries}
          setCountries={setCountries}
          isClicked={false}
        />
      </Layout>
      <TopButton />
    </>
  );
}

export default App;
