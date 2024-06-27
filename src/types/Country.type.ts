export type Country = {
  altSpellings: string[];
  area: number;
  borders?: string[];
  capital: string[];
  captialInfo: CapitalInfo;
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc?: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  currencies: Currencies;
  demonyms: Demonyms;
  fifa?: string;
  flag: string;
  flags: Flags;
  gini?: Gini;
  idd: Idd;
  independent: boolean;
  landlocked: boolean;
  languages: Languages;
  latlng: number[];
  maps: Maps;
  name: CountryName;
  population: number;
  postalCode?: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  unMember: boolean;
};

export type CountryWithIsClicked = Country & {
  isClicked: boolean;
};

type CapitalInfo = {
  latlng: number[];
};

type Car = {
  signs: string[];
  side: string;
};

type CoatOfArms = {
  png: string;
  svg: string;
};

type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type Demonyms = {
  [key: string]: {
    [key: string]: string;
  };
};

type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type Flags = {
  png: string;
  svg: string;
};

type Gini = {
  [key: string]: number;
}

type Idd = {
  root: string;
  suffixed: string[];
};

type Languages = {
  [key: string]: string;
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type CountryName = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type PostalCode = {
  format: string;
  regex: string;
};

type Translations = {
  [key: string]: Translation;
};

type Translation = {
  official: string;
  common: string;
};
