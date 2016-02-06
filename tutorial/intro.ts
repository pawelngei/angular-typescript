
function hello(name: string) {
  return `Hello, ${name}`;
}

document.body.innerHTML = hello('world!');

class Book {
  constructor(public title:string, public isbn:number) {}
}
