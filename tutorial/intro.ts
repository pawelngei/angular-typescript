
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
