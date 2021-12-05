let ccButton = document.getElementById("changeColor");
let newButton = document.getElementById("newColor");
let tabCount = document.getElementById("tab-count");

chrome.storage.sync.get("color", ({ color }) => {
  ccButton.style.backgroundColor = color;
});


ccButton.addEventListener("click", clickHandler);
newButton.addEventListener("click", clickHandler);

async function clickHandler(evt) {
  // if(evt.x < 35){
  //   console.log("click registered on the left half of", evt.target.id);
  // }
  // else {
  //   console.log("click registered on the right half of", evt.target.id);
  // }
  //console.log("In click listener",evt.x, evt.y, evt.target.id);
  let tabs = await chrome.tabs.query({});
  console.log("tabs =", tabs);
  tabCount.innerHTML = "You have " + tabs.length + " tabs currently open.";
}
