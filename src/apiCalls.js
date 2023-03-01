export const fetchData = () => {
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
      'X-RapidAPI-Key': '0ba55045bemsh7c87450d2a771b8p155de8jsn591dafeb3f86',
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