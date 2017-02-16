function getPageInfo(callback) {
	chrome.runtime.onMessage.addListener(function(message) {
		callback(message)
	})
	chrome.tabs.executeScript(null, { file: 'peek.js' })
}