// Initialize the arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Display the number of items in each category
document.getElementById('breakfastTotalItems').innerHTML = `<strong>Total Breakfast Items:</strong> ${breakfastMenu.length}`;
document.getElementById('maincourseTotalItems').innerHTML = `<strong>Total Main Course Items:</strong> ${mainCourseMenu.length}`;
document.getElementById('dessertTotalItems').innerHTML = `<strong>Total Dessert Items:</strong> ${dessertMenu.length}`;

// Using map() for breakfast menu
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Using forEach() for main course menu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Using for loop for dessert menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
