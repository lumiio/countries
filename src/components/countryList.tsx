import { gql, useQuery } from "@apollo/client";

import { COUNTRY } from "../controllers/fragments";
import FilterRequest from "../models/filterRequest";
import SortModule, { SortOption, SortOrder } from "../models/sortModule";
import "./styles/countryList.css";
// import { useEffect, useState } from 'react';

interface props {
  filter: FilterRequest;
  sortModule: SortModule;
}

interface Continent {
  code: string;
  name: string;
}

interface Language {
    code: string;
    name: string;
    native: string;
}

interface Country {
  code: string;
  name: string;
  native: string;
  continent: Continent;
  capital: string;
  currency: string;
  languages: Language[];
}

interface Countries {
  countries: Country[];
}

export default function CountryList(props: props) {
  const { filter, sortModule } = props;

  //query countries
  const query = gql`
  ${COUNTRY}
  {
    countries(filter: ${filter.buildGqlString()}) {
      ...CountryQuery
    }
  }
`;
  const { loading, error, data } = useQuery<Countries>(query);

  //return error and loading msgs
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  //render function
  function createCountryList(data: Country[]) {
    return (
      <div className="country-list">
        {data &&
          data &&
          data.map(({ code, name, native, continent, capital, currency }, index) => {
            return (
              <div className={index % 2 ? 'highlight country-block' : 'country-block'}>
                {code} - {name}, {capital}
                <br />
                Currency: {currency}
                <br />
                Native: {native}
                <br />
                Continent: {continent.code} - {continent.name}
              </div>
            );
          })}
      </div>
    );
  }

  //sort function
  if (data && data.countries && sortModule.isValid()) {
    let mutatedData = [...data.countries];
    const selector: string[] = sortModule.sortOption?.field.split(".") || [];

    if (selector.length > 0)
      mutatedData.sort((a, b) => {
        const valueA = getSelectedValue(selector, a);
        const valueB = getSelectedValue(selector, b);
        if (valueA > valueB)
          return sortModule.sortOrder == SortOrder.DESC ? 1 : -1;
        if (valueB > valueA)
          return sortModule.sortOrder == SortOrder.DESC ? -1 : 1;
        return 0;
      });

    return createCountryList(mutatedData);
  }

  return createCountryList((data && data?.countries) || []);
}

function getSelectedValue(selectors: string[], value: any) {
  let selectedValue = value;
  selectors.forEach((selector) => {
    selectedValue = value[selector];
  });
  return selectedValue;
}
