export const fetchData = (id) => {
  const url = id ? `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}` : 'https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non_Alcoholic'
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
  const myKey = process.env.REACT_APP_API_KEY_CDB
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  return fetch(url, options)
          .then((response) => {
            if(response.ok) {
              return response.json()
            } else {
              throw new Error('Whoops, something went wrong')
            }
          })
}