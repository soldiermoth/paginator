
function strReverse(s)  {
  return s.split('').reverse().join('');
}
// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  var url = strReverse(tab.url)
  url = url.replace(/(\d+)(.*)$/,function(_,num,remainder){
    num = parseInt(strReverse(num),10)-1
    return strReverse(""+num)+remainder;
  })
  url = strReverse(url)
  if (url != tab.url) {
    chrome.tabs.update(tab.id, {url:url});
  }
});
