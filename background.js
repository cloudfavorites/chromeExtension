function checkForValidUrl(tabId, changeInfo, tab) {
     chrome.pageAction.show(tabId);
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
// 点击icon图片出发事件
chrome.browserAction.onClicked.addListener(
     function(tab){
        chrome.tabs.executeScript(null, {file: "script.js"});
});