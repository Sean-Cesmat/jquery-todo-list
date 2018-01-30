# To-Do App

In this assignment, you're going put together everything you've learned about listening to DOM events and manipulating the DOM with jQuery to build a dynamic Todo List application.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` - start the BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS
* Load jQuery on the page by using a CDN link. See below.

#### Loading Dependencies

For this project you should be using jQuery. Either use the link from the [Google Developer Libraries](https://developers.google.com/speed/libraries/#jquery) or the link below before the `</body>` tag.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
```

## Requirements

* A user should be able to add items to a 'todo' list from a form input using an input field and submit button.
* The form should clear when the user submits a task and focus back on the todo item field.
* On every item appended to the 'todo' list, have a way to delete the item. This could be in the form of a 'delete' link, a checkbox to mark it as active or inactive, or a plain button with an `X` on it.
* Use **event delegation** so that clicking the `x` or other buttons removes the item. This will require setting up a click event on the main todoList container, and using `.on("click", ".childItemSelector", function() {})` to watch for behavior on newly appended items.

## Deliverable

A working todo list. No sample screenshot this time.

## Bonuses

* Style the todo list with your own *beautiful* sense of design.
* Use [jquery-ui sortable](https://jqueryui.com/sortable/) to make the todo list sortable. We'll be going over this more in the context of jQuery plugins
* Use the built-in HTML5 feature of local storage. Store your todo item into local storage. When your page is refreshed it will load the old todo items from localstorage.
  * [Local Storage And How To Use It On Websites](http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/)

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.


## Credits
Photo by Glenn Carstens-Peters on Unsplash
