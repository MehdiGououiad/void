const axios = require('axios');
const fetcher = async (url="http://34.77.87.8:8080/https://elsan.void.fr/fr/jsonapi/node/elsan_praticien") => {
    const response = await axios.get(url)
    return ( response.data[0].type)
    
  }
jest.mock('axios');


it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
    
      {
        userId: 1,
        id: 1,
        type: 'node--elsan_praticien'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await fetcher();
  expect(title).toEqual('node--elsan_praticien');
});