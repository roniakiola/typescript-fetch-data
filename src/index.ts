import { Details, Company } from './types';

const fetchAllCompanies = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  const response = await fetch(
    `http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`
  );
  const data = await response.json();
  const result: Company[] = await data.results;
  result.forEach((obj) => {
    const firstKey = Object.keys(obj)[0] as keyof Company;
    const businessId = obj[firstKey] as string;
    fetchCompany(businessId);
  });
};

const fetchCompany = async (businessId: string) => {
  const response = await fetch(`http://avoindata.prh.fi/bis/v1/${businessId}`);
  const data = await response.json();
  const result: Details = await data.results[0];
  console.log(result);
  return result;
};

fetchAllCompanies(3, 0, '00200');
// fetchCompany('3346624-5');
