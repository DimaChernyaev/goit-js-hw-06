const categoriesList = document.querySelector('#categories')

function consoleLogAnimalsCategory(elements) {
    console.log('Number of categories:', elements.children.length);

    const itemElement = [...elements.children];

    itemElement.forEach(element => {
        console.log('Category:', element.firstElementChild.textContent);
        console.log('Elements:', element.lastElementChild.children.length)
    });
}

consoleLogAnimalsCategory(categoriesList)