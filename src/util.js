export const addFavProp = (data) => {
  data.forEach(drink => drink.fav = false)
  return data
}

export const cleanDrink = (drink) => {
  drink.ingredients = []
  drink.measurements = []
  const keys = Object.keys(drink)
  const toss = ['strDrinkAlternate',
    'strCategory',
    'strIBA',
    'strAlcoholic',
    'strInstructionsES',
    'strInstructionsDE',
    'strInstructionsFR',
    'strInstructionsIT',
    'strInstructionsZH-HANS',
    'strInstructionsZH-HANT',
    'strImageSource',
    'strImageAttribution',
    'strCreativeCommonsConfirmed',
    'dateModified',]
  keys.forEach(key => {
    if (toss.includes(key) || (key.includes('strIngredient') && !drink[key]) || (key.includes('strMeasure') && !drink[key])) {
      delete drink[key]
    }
    if(key.includes('strIngredient') && drink[key]) {
      drink.ingredients.push(drink[key])
      delete drink[key]
    }
    if(key.includes('strMeasure') && drink[key]) {
      drink.measurements.push(drink[key])
      delete drink[key]
    }
  })
  return drink
}
//TOSS
// strDrinkAlternate,
// strCategory,
// strIBA,
// strAlcoholic,
// strInstructionsES,
// strInstructionsDE,
// strInstructionsFR,
// strInstructionsIT,
// strInstructionsZH-HANS,
// strInstructionsZH-HANT,
// strImageSource,
// strImageAttribution,
// strCreativeCommonsConfirmed,
// dateModified,

//video??? maybe if enough have it....

//KEEP
//idDrink
//strDrink
//strTags
//strGlass
//strInstructions
//strDrinkThumb
//strIngredient[]
//strMeasure[]



