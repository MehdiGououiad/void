import axios from "axios";
const fetcher = async (url="http://34.77.87.8:8080/https://elsan.void.fr/fr/jsonapi/node/elsan_praticien") => {
    const response = await axios.get(url)
    return ( response.data.data[0].type)
    
  }
  
  it('returns the type  of the first practionner', async () => {
    const title = await fetcher();  // Run the function
    expect(title).toEqual('node--elsan_praticien');  // Make an assertion on the result
  });