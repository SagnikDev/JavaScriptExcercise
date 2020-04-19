let book1 = {
  title: "2 States",
  author: "Chetan Bhagat",
  pageNumber: 200,
  description: "This is a description of the book",
};
let book2 = {
  title: "Half Girlfriend",
  author: "Chetan Bhagat",
  pageNumber: 182,
  description: "This is a description of the book",
};
// console.log(book);
// console.log(book.author)

// console.log(`My Book's name is ${book.title}`);

// //hANDELLING  THE OBJECTS

// book.title='One Night @ Callcentre'

// console.log(book);

//Add functions
let changePageNmber = function (object, number) {
  return {
    format1: `The page number is ${object.pageNumber}`,
    format2: `The pae number is ${object.pageNumber + 1}`,
  };
};

let ad_one = changePageNmber(book1);
console.log(ad_one.format1);
