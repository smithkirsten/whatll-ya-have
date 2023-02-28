export const fetchData = async(id) => {
  const url = id ? `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}` : `www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return error
  }
  
}