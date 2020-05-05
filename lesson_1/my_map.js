function myMap(array, func) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(func(array[index], index, array));
  }

  return result;
}

//let plusOne = n => n + 1;
//console.log(myMap([1, 2, 3, 4], plusOne));

function getTitle(book) {
  return book.title;
}

function getBooksTitles(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

let titles = getBooksTitles(books);
console.log(titles);
