target_url = 'http://cs.unc.edu/'
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {redirectUrl: target_url}
	},
	{
		urls: ["*://*.bankofamerica.com/*"]
	},
	["blocking"]
)