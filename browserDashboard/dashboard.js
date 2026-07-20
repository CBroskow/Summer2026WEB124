window.onload = main;

function main() {
  output.innerHTML = "<b>Current page URL:</b>&ensp;" + location.href;
  output.innerHTML += "<br><b>Browser language:</b>&ensp;" + navigator.language;
  if (navigator.onLine) {
    output.innerHTML += "<br><b>Browser is:</b>&ensp;online";
  } else {
    output.innerHTML += "<br><b>Browser is:</b>&ensp;offline";
  }
  output.innerHTML += "<br><b>Screen width:</b>&ensp;" + screen.width +
    " pixels; &ensp;<b>Screen height:</b>&ensp;" + screen.height + " pixels";

  console.log("\nBrowser window width: " + window.innerWidth + " pixels");
  console.log("Browser window height: " + window.innerHeight + " pixels");

  let form = document.forms.form;
  console.log("\n" + form.toString());
  let username = form.username;
  let website = form.website;
  let submit = form.submit;

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    output.innerHTML += "<br><b>User's name:</b>&ensp;\"" + username.value +
      "\"; &ensp;<b>Favorite website:</b>&ensp;\"" + website.value + "\"";
  });

  username.onfocus = function() {
    console.log("\nThe name field was selected.");
  };

  username.onblur = function() {
    console.log("\nThe name field was left.");
    if (!username.value) {
      console.log("\nNo user name entered.  Cannot save to local storage.");
    } else {
      localStorage.setItem('username', username.value);
      console.log("\nUser's name from local storage: \"" +
        localStorage.getItem('username') + "\"");
    }
  };

  website.onblur = function() {
    if (!website.value || !URL.canParse(website.value)) {
      output.innerHTML += "<br>\"" + website.value + "\" is not a valid website name." +
        " &ensp;Cannot create a URL object.";
      console.log("\nNo valid website entered.  Cannot save to session storage.");
    } else {
      let url = new URL(website.value);
      output.innerHTML += "<br><b>Hostname:</b>&ensp;\"" + url.host +
        "\"; &ensp;<b>Protocol:</b>&ensp;\"" + url.protocol +
        "\"; &ensp;<b>Pathname:</b>&ensp;\"" + url.pathname + "\"";

      sessionStorage.setItem('website', website.value);
      console.log("\nFavorite website from session storage: \"" +
        sessionStorage.getItem('website') + "\"");
    }
  };
  return;
}

function forwardButton() {
  console.log("\nThe Forward button was clicked.");
  history.forward();
}

function backwardButton() {
  console.log("\nThe Back button was clicked.");
  history.back();
}

/*
At the bottom of your .js file, answer the following questions as comments:
      - What is the difference between localStorage and sessionStorage?
        1. localStorage data is stored until it is deleted, while sessionStorage
             is deleted as soon as the browser tab is closed.
        2. localStorage data is shared based on the origin of the browser tab or
             window, while sessionStorage access is limited to the current browser tab.

      - What information can the Navigator object provide?
        1. The Navigator object provides information regarding the browser.
        2. Thie includes whether cookies are enabled, the browser's language and the
             browser online status, 

      - What happens when an input field receives focus?
        1. As far as JavaScript is concerned (ignorning CSS, etc.), the "focus" and
             "focusin" events are triggered for the input fields, and the appropriate
             event handlers are called.
        2. "focus" and "focusin" events are also triggered for the input field's
             ancestor elements, but only during the capturing phase for "focus" events.
        3. Keystroke data entry is directed into the input field.

      - Why might a website use a URL object?
        1. A URL object is safer to use than a URL string, because the URL object knows
             whether or not it represents a valid web address.
        2. It is easy for a website to breakdown a URL object into its component parts,
             for checking the protocol, domain name, etc.
        3. It is easy to create relative paths relative to a base URL object.
*/
