import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import CountryList from './components/CountryList';
import TopButton from './util/TopButton';
import { useEffect, useState } from 'react';
import { CountryWithIsClicked } from './types/Country.type';
import { AxiosError } from 'axios';
import { countryApi } from './api/countries';
import Layout from './components/common/Layout';

function App() {
  const [countries, setCountries] = useState<CountryWithIsClicked[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | AxiosError>(null);

  const getCountries = async (): Promise<void> => {
    try {
      const response = await countryApi.get<CountryWithIsClicked[]>('/all'); // 방법 2, 없어도 되긴 함
      const originalCountries = response.data;
      const sortedCountries = originalCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      const countryWithIsClicked = sortedCountries.map((country) => ({
        ...country,
        isClicked: false,
      }));
      setCountries(countryWithIsClicked);
      console.log(countryWithIsClicked);
      // return CountryWithIsClicked; // as Country; // 타입 단언, 타입을 알려주는거 1번 방법
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
      <div className="h-screen  flex justify-center items-center ">
        <div className="text-xl flex justify-center items-center bg-slate-200 rounded-lg w-[400px] h-[80px]">로딩 중...🇰🇷</div>
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
