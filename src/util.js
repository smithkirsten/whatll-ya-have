export const cleanDrink = (drink) => {
  const keys = Object.keys(drink)
  const keepers = ['idDrink', 'strDrink', 'strTags', 'strGlass', 'strInstructions', 'strDrinkThumb']
  keys.forEach(key => {
    if (!keepers.includes(key) || (key.includes('strIngredient') && !drink[key]) || (key.includes('strMeasure') && !drink[key])) {
      delete drink[key]
    }
    console.log(drink)
    return drink
  })

}

//idDrink
//strDrink
//strTags
//strGlass
//strInstructions
//strDrinkThumb
//strIngredient[]
//strMeasure[]
