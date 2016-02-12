# angular-typescript
A small Angular project to get a grasp on TypeScript with Angular 1.0 and Grunt (just to prove it's doable and way less convenient than Webpack)

This project is divided into three parts:

 - Angular VanillaJS implementation
 - Angular TypeScript implementation
 - REST API in Node to serve both of them

## JavaScript and friends
 - Best source on JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
 - JavaScript's WATs: https://www.destroyallsoftware.com/talks/wat
 - ECMAScript 5: http://caniuse.com/#search=es5
 - ECMAScript 6: http://caniuse.com/#search=es6
 - ECMAScript 2015: https://babeljs.io/docs/learn-es2015/
 - TypeScript: http://www.typescriptlang.org/

## Webapp structure with npm and Grunt
 - Node and npm: https://nodejs.org/en/
 - Why not bower?
 - Webapp scaffolder: http://yeoman.io/
 - Scaffolding for Angular: https://www.npmjs.com/package/generator-angular-typescript | https://www.npmjs.com/package/generator-tsangular
 - Grunt, gulp, browserify and webpack: http://gruntjs.com/
 - TypeScript with Grunt: https://www.npmjs.com/package/grunt-typescript
 - [Modules]
 - [Basics: concat, compile, minify, uglify, http server]
 - [Testing: Karma, Mocha, Jasmine]

## First steps with AngularJS 1.x
 - What is Angular? https://angularjs.org/
 - Angular and other frameworks: http://todomvc.com/
 - Basic components: why can't I just jQuery everything?
 - Best practices: https://github.com/johnpapa/angular-styleguide
 - What's new in Angular 1.5: http://angularjs.blogspot.com/2016/02/angular-150-ennoblement-facilitation.html

## Routing
 - Single page applications
 - Routing configuration and deep linking
 - Browsing `$history` and hyperlink parameters
 - The benefits of `ui-router`
 - View display

## Controllers and Scopes
 - Controller and a template
 - What is `$scope`? (Baby dont `$hurt` me)
 - The dangers of `$rootScope`
 - When to `$apply`
 - Binding events: `$on`, `$emit` (up), `$broadcast` (down)
 - `ControllerAs` versus pure `$scope`
 - Source: https://docs.angularjs.org/api/ng/type/$rootScope.Scope

## Forms
 - Form validation in Angular
 - `pristine` and `dirty`, how deep is `valid`
 - Styling forms in Angular

## Filters
 - How to setup an existing `|filter`?
 - Parameters to filter
 - Your own filters

## Directives
 - Definition and API: finally a place for my jQuery!
 - `$scoping` with a directive
 - Lifecycle from birth to `$destroy`
 - ngModelController
 - Transclusion
 - `$parse`, `$sompile`, `angular.element`
 - `e.preventDefault` magic

## Services, factories and REST architecture
 - Differences between Services and Factories: http://stackoverflow.com/a/26924234
 - What about the REST?
 - AJAX with `$http`
 - Consume REST resources with `$resource`
 - Asynchronous programming and `$q` promises
 - Swagger UI for your lovely backend guy: http://swagger.io/, http://bitoftech.net/2014/08/25/asp-net-web-api-documentation-using-swagger/
 - Cancelling `$http` requests: http://odetocode.com/blogs/scott/archive/2014/04/24/canceling-http-requests-in-angularjs.aspx

## Internationalisation (i18n)
 - How to activate internationalization in a project
 - Dates formatting, numbers and currency
 - [Best practices for translating your own application]

## Angular 2
 - What is Angular 2: https://angular.io/
 - Differences between Angular 1 and 2
 - Your first Angular 2 app: https://angular.io/docs/ts/latest/quickstart.html
 - `ng-upgrade` https://angular.io/docs/ts/latest/guide/upgrade.html

## (if we have time) Testing Angular
 - Jasmine, Mocha, Karma, Protractor?
 - Unit tests
 - Testing improves quality of code

## Books I recommend:
 - Douglas Crockford:  JavaScript: The Good Parts - http://shop.oreilly.com/product/9780596517748.do
 - Shyam Seshadri, Brad Green: AngularJS: Up and Running - http://shop.oreilly.com/product/0636920033486.do
 - Dustin Boswell: The Art of Readable Code - http://shop.oreilly.com/product/9780596802301.do
 - Andrew Hunt, Dave Thomas: The Pragmatic Programmer: From Journeyman to Master - https://pragprog.com/book/tpp/the-pragmatic-programmer
