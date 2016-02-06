function hello(name) {
    return "Hello, " + name;
}
document.body.innerHTML = hello('world!');
var Book = (function () {
    function Book(title, isbn) {
        this.title = title;
        this.isbn = isbn;
    }
    return Book;
})();
