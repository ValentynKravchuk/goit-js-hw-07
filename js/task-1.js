const listItem = document.querySelectorAll('.item');
console.log('Number of categories: ', listItem.length);

listItem.forEach(category => {
  const heder = category.querySelector('h2').textContent;
  console.log('Category:', heder);

  const items = category.querySelectorAll('li').length;
  console.log('Elements:', items);
});
