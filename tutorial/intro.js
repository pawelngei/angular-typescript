var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var LibraryBook = (function (_super) {
    __extends(LibraryBook, _super);
    function LibraryBook(title, isbn) {
        _super.call(this, title, isbn);
        this._available = true;
    }
    Object.defineProperty(LibraryBook.prototype, "available", {
        get: function () { return this.available; },
        set: function (isAvailable) {
            console.log("'" + this.title + "' is now " + (isAvailable ? 'available' : 'unavailable'));
            this._available = isAvailable;
        },
        enumerable: true,
        configurable: true
    });
    return LibraryBook;
})(Book);
