//Driver: Abdullah Al Humaidhan
//Navigator: Waleed Al Qadeeri

//Part 1: Understanding Objects

const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
};

//Part 2: Modifying Objects

book.pageCount = 1096;

book.ISBN = "978-1491952023";

book.publishedYear = 2021;

//Part 3: Advanced Object Operations

book.author = ["David Flanagan", "Another Author"];

book.reviews = [
  {
    reviewer: "Book Critic",
    comment: "A comprehensive guide to JavaScript.",
  },
];

console.log(book);
