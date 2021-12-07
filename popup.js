let ccButton = document.getElementById("changeColor");
let tabButton = document.getElementById("tab-button");
let tabCount = document.getElementById("tab-count");
let windowButton = document.getElementById("window-button");
let windowCount = document.getElementById("window-count");

chrome.storage.sync.get("color", ({ color }) => {
  ccButton.style.backgroundColor = color;
});

ccButton.addEventListener("click", clickHandler);
tabButton.addEventListener("click", clickHandler);
windowButton.addEventListener("click", clickHandler);

async function clickHandler(evt) {
  // if(evt.x < 35){
  //   console.log("click registered on the left half of", evt.target.id);
  // }
  // else {
  //   console.log("click registered on the right half of", evt.target.id);
  // }
  console.log("In click listener",evt.x, evt.y, evt.target.id);
  if( evt.target.id === "tab-button" ) {
    let tabs = await chrome.tabs.query({});
    console.log("tabs =", tabs);

    if( tabs.length >= 10 ) {
      alert("You have " + tabs.length + " tabs currently open.");
    }
    tabCount.innerHTML = "There are a total of " + tabs.length +
      " tabs currently open."
  };
  //Count total number of windows open
  if( evt.target.id === "window-button" ) {
    chrome.windows.getAll(function(windows) {
      windowCount.innerHTML = "There are a total of " + windows.length +
        " windows currently open."
      //console.log("There are a total of " + windows.length + " windows currently open.");
    });
  }
  if(evt.target.id === "changeColor") {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  }
}

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
  });
}
