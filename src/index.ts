// type FetchInputs = {
//   maxResults: number;
//   resultFrom: number;
//   streetAddressPostCode: string;
// };

const fetchApi = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  const response = await fetch(
    `http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`
  );
  const data = await response.json();
  const result = data.results;
  console.log(result);
  return result;
};

fetchApi(5, 1, '00200');
