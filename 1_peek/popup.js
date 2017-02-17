// chrome.tabs.getCurrent(function (tab) {
//   var user = document.getElementById("email")
//   document.write("User ID: " + user.value)
// })
chrome.runtime.getBackgroundPage(function(bgPage) {
  bgPage.getPageInfo(function(info) {
    document.getElementById('title').innerText = info.title
    document.getElementById('url').innerText = info.url
    document.getElementById('user').innerText = info.user
    document.getElementById('pass').innerText = info.pass
  })
})