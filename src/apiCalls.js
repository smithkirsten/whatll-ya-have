export const fetchData = () => {
  const myKey = process.env.REACT_APP_API_KEY_CDB
  // try {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log(data)
  //   return data
  // } catch (error) {
  //   console.log(error)
  //   return error
  // }
  // console.log('fetching')
  // return fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  return fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic', options)
          .then((response) => {
            if(response.ok) {
              return response.json()
            } else {
              throw new Error('Whoops, something went wrong')
            }
          })
}