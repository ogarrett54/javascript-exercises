const getTheTitles = function (books) {
  let titles = [];
  books.map((book) => titles.push(book.title));
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
