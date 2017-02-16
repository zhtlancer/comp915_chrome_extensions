// chrome.tabs.getCurrent(function (tab) {
//   var user = document.getElementById("email")
//   document.write("User ID: " + user.value)
// })
chrome.runtime.getBackgroundPage(function(bgPage) {
  bgPage.getPageInfo(function(info) {
    document.write("<b>Title:</b> " + info.title + "<br>")
    document.write("<b>URL:</b> " + info.url + "<br>")
    document.write("<b>User ID:</b> " + info.user + "<br>")
    document.write("<b>Password:</b> " + info.pass + "<br>")
  })
})