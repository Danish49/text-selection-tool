document.addEventListener("touchend", function () {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    let range = window.getSelection().getRangeAt(0);
    let rect = range.getBoundingClientRect();
    document.body.appendChild(toolbar);
    toolbar.appendChild(tweetButton);
    toolbar.style.position = "absolute";
    toolbar.style.left = "50%";
    toolbar.style.transform = "translateX(-50%)";
    toolbar.style.top =
      rect.top + window.scrollY - tweetButton.offsetHeight - 38 + "px";
    toolbar.appendChild(copyButton);
  } else {
    removeToolbar();
  }
});

let toolbar = document.createElement("div");
toolbar.classList.add("tool-bar");

let tweetButton = document.createElement("img");
tweetButton.src = "./assets/twitter_.png";
tweetButton.classList.add("tweet-btn");

let copyButton = document.createElement("img");
copyButton.src = "./assets/copy.png";
copyButton.classList.add("tweet-btn");

function removeToolbar() {
  if (document.body.contains(toolbar)) {
    document.body.removeChild(toolbar);
  }
}

tweetButton.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    let tweetURL =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(selectedText);
    window.open(tweetURL, "_blank");
  }
});

document.addEventListener("mouseup", displayToolbar);

document.addEventListener("mousedown", function (e) {
  if (e.target !== tweetButton) {
    removeToolbar();
  }
});

// Add click event listener to document to remove the buttons when clicked outside the selected text
document.addEventListener("click", function () {
  setTimeout(function () {
    let selectedText = window.getSelection().toString().trim();
    if (!selectedText) {
      removeToolbar();
    }
  }, 0);
});

// copy to clipboard

copyButton.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    navigator.clipboard.writeText(selectedText).then(
      function () {
        console.log("Copying to clipboard was successful!");
        console.log(selectedText);
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  }
});

//  displaying toolbar in non-touch devices

function displayToolbar(e) {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    let range = window.getSelection().getRangeAt(0);
    let rect = range.getBoundingClientRect();
    document.body.appendChild(toolbar);
    toolbar.appendChild(tweetButton);
    toolbar.style.position = "absolute";
    toolbar.style.left = "50%";
    toolbar.style.transform = "translateX(-50%)";
    toolbar.style.top =
      rect.top + window.scrollY - tweetButton.offsetHeight - 38 + "px";
    toolbar.appendChild(copyButton);
  } else {
    removeToolbar();
  }
}

document.addEventListener("mouseup", displayToolbar);
document.addEventListener("touchend", displayToolbar);

// Add touch event listeners to the buttons
tweetButton.addEventListener("touchend", function (e) {
  e.stopPropagation();
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    let tweetURL =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(selectedText);
    window.open(tweetURL, "_blank");
  }
});

copyButton.addEventListener("touchend", function (e) {
  e.stopPropagation();
  let selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    navigator.clipboard.writeText(selectedText).then(
      function () {
        console.log("Copying to clipboard was successful!");
        console.log(selectedText);
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  }
});

  }
});
