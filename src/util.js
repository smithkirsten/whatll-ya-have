export const cleanAllDrinks = () => {
  
}

export const cleanDrink = (drink) => {
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



