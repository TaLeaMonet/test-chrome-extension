let ccButton = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  ccButton.style.backgroundColor = color;
});
