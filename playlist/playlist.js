window.onload = main;

function main() {
  let imagine = document.getElementById("imagine");
  globalThis.paragraph = document.querySelector('p');
  globalThis.heading = document.getElementsByTagName('h3')[1];
  console.log("The element on my page with an ID:");
  console.log(imagine);
  console.log("\nThe paragraph element on my page:");
  console.log(paragraph);
  let button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', buttonClicked2);
  button.parentElement.addEventListener('click', buttonParentClicked);
  let ul = document.getElementsByTagName('ul')[0];
  ul.addEventListener('click', function(event) {
    console.log("\nClicked song title:\n" + event.target.textContent);
  });
  let anchor = document.getElementsByTagName('a')[0];
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("\nThe default action was prevented.");
  });
}

function buttonClicked() {
  heading.innerHTML = "A <i>changed</i> heading";
  paragraph.innerHTML = "A <i>changed</i> paragraph";
  console.log("\nThe button was clicked.");
}

function buttonClicked2() {
  console.log("\nThe button was clicked #2.");
}

function buttonParentClicked() {
  console.log("\nThe button was clicked (from button parent).");
}

/*
At the bottom of your .js file, answer the following questions as comments:
      - What is the difference between getElementById() and querySelector()?
        1. getElementById() searches the document for a specific ID, while
             querySelector() can search by any CSS selector.
        2. getElementById() must be called on the document, while 
             querySelector() can search on any element.

      - What is event bubbling?
        1. "Event bubbling" refers to event handlers being called on the original
             (target) element, followed in sequence by the target element's parent
             and other ancestors.
        2. However, this "bubbling" of event handler processing by ancestors can
             be terminated by a handler calling the event object's stopPropagation()
             method.

      -What is event delegation?
        1. Event delegation is a programming technique (pattern) in which event handling
             on a set of element siblings are all handled by a handler on a common ancestor.
        2. A single handler provides greater flexibility in adapting to changes in
             the number and types of child elements.

      - Why would someone want to use preventDefault()?
        1. In general, preventDefault() is used to supplement, replace or cancel the default action.
        2. For example. a form submission can be checked before transmission, or
             menu operations can be customized in real-time.
*/
