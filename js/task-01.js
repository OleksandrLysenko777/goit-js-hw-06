
const allItems = document.querySelectorAll('.item');
const allItemsLength = allItems.length;
console.log(`Number of categories: ${allItemsLength}`);

allItems.forEach((element) => {
    let elementTitle = element.querySelector('h2').textContent;
    let kindOfTitleElements = element.querySelectorAll('li');
    let kindOfTitleElementsLength = kindOfTitleElements.length;
    console.log(`Category: ${elementTitle}`);
    console.log(`Elements: ${kindOfTitleElementsLength}`);
});