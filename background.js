let color = '#aa00ff';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cpurple', `color: ${color}`);
});
