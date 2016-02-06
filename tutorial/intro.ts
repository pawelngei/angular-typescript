
function hello(name: string) {
  return `Hello, ${name}`;
}

document.body.innerHTML = hello('world!');

class Book {
  title: string;
  isbn: number;
  constructor(title: string, isbn: number) {
    this.title = title;
    this.isbn = isbn;
  }
}
