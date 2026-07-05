var books =
  ["Do Androids Dream of Electric Sheep?,Philip K. Dick,258",
    "The Hitchhiker’s Guide to the Galaxy,Douglas Adams,193",
    "To Kill a Mockingbird,Harper Lee,323",
    "Something Wicked This Way Comes,Ray Bradbury,293",
    "I Was Told There'd Be Cake: Essays,Sloane Crosley,230"];
var id = Symbol("id");
window.onload = main;

function main() {
  let bookObjects = [];
  books.forEach((book) => {
    let bookObj = new Book(book);
    bookObjects.push(bookObj);
  });
  console.log("List of book objects:");
  bookObjects.forEach((bookObj) => {
    console.log("  " + bookObj);
  });

  console.log("Log the entire document:");
  console.log("  " + document);
  console.log("Log document.body:");
  console.log("  " + document.body);
  console.log("Log the first child of the body:");
  console.log("  " + document.body.firstChild);
  console.log("Log all children of the body:");
  for (let child of document.body.children) {
    console.log("  " + child);
  }

  console.log("Access and print the <ul> element:");
  for (let child of document.body.children) {
    if (child.tagName == "UL") {
      var savedChild = child;
      console.log("  " + child);
      break;
    }
  }
  console.log("Access and print an <li> element:");
  for (let child of savedChild.children) {
    if (child.tagName == "LI") {
      console.log("  " + child);
      console.log("Access and print the parent of that <li>:");
      console.log("  " + child.parentNode);
      console.log("Access and print a sibling of that <li>:");
      console.log("  " + child.nextElementSibling);
      break;
    }
  }

  console.log("Display the text inside one of your <li> elements:");
  for (let child of savedChild.children) {
    if (child.tagName == "LI") {
      console.log("  " + child.textContent);
      break;
    }
  }
  console.log("Display the type of a node:");
  switch (savedChild.nodeType) {
    case 1:
      console.log("  " + savedChild + " is an element node.");
      break;
    case 2:
      console.log("  " + savedChild + " is an attribute node.");
      break;
    case 3:
      console.log("  " + savedChild + " is a text node.");
      break;
    case 8:
      console.log("  " + savedChild + " is a comment node.");
      break;
    case 9:
      console.log("  " + savedChild + " is a document node.");
      break;
    default:
      console.log("  " + savedChild + " is an unknown node type.");
  }
  
  console.log("Display the class name of a node:");
  for (let child of savedChild.children) {
    if ((child.tagName == "LI") && child.hasAttribute("class")) {
      console.log("  " + child + " has className: " + child.className);
      break;
    }
  }
}

function Book(inputString) {
  let inputArray = inputString.split(",");
  this.title = inputArray[0];
  this.author = inputArray[1];
  this.pageCount = parseInt(inputArray[2]);
  this.id = id;

  this.getTitle = function() {
    return this.title;
  };

  this.getAuthor = function() {
    return this.author;
  };

  this.getPageCount = function() {
    return this.pageCount;
  };

  this.getID = function() {
    return this.id;
  };

  this.toString = function() {
    return `{title: "${this.title}", author: "${this.author}", pageCount: ${this.pageCount})`;
  };
}

/*
At the bottom of your .js file, answer the following questions as comments:
      - What is the DOM tree?
        1. The DOM tree is a model of the components of a web page stored in the memory of a browser.
        2. It is organized from top to bottom as a tree, similarly to a family tree.

      - What is a node in the DOM?
        1. A node is a logical component of a web page, and stored in the DOM model
        2. A node which represents an HTML tag is called an "element".
        3. Every component of an HTML page is stored as nodes, including text and comments.

      - What is the difference between a parent and a child node?
        1. Parent nodes contain child nodes.
        2. This is due to the hierarchical nature of the DOM.

      - What is a sibling node?
        1. Siblings nodes are nodes that have the same parent.
        2. Thus, they are contained within the same HTML container structure.
*/
