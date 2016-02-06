
function hello(name: string) {
  return `Hello, ${name}`;
}

document.body.innerHTML = hello('world!');

class Book {
  constructor(public title:string, public isbn:number) {}
}

class LibraryBook extends Book {
  private _available = true;
  constructor(title: string, isbn: number) {
    super(title, isbn);
  }
  get available() {return this.available;}
  set available(isAvailable: boolean) {
    console.log(`'${this.title}' is now ${isAvailable ? 'available': 'unavailable'}`);
    this._available = isAvailable;
  }
}

class Library {
  books: LibraryBook[] = [];
  addBooks(...newBooks: LibraryBook[]) {
    this.books.push(...newBooks);
  }
  checkOut(book: LibraryBook) {
    book.available = false;
  }
  checkIn(book: LibraryBook) {
    book.available = true;
  }
  printBooks() {
    for (var book of this.books) {
      let {title, isbn} = book;
      console.log(`Title: '${title}', ISBN: ${isbn}`);
    }
  }
}

let bookA = new LibraryBook('Pan Tadeusz', 987654321);
let bookB = new LibraryBook('Pani Tadeuszowa', 987654322);
let library = new Library();
library.addBooks(bookA, bookB);
library.printBooks();
library.checkOut(bookA);
library.checkIn(bookA);
