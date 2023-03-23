const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  const ingredientsList = document.querySelector('#ingredients');


  function makeLiOfIngredientsList(arr) {

  const liElement = arr.map(element => {
    const li = document.createElement('li');
    li.textContent = element;
    li.classList.add('item');
    return li;
  })

  return ingredientsList.append(...liElement);
}

makeLiOfIngredientsList(ingredients)






