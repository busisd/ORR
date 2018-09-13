chrome.webRequest.onBeforeRequest.addListener(
  // the following line uses the javascript match function and regexp to find what is in parentheses.
  // in this case, pthe thing in parentheses is just (any character after the slash after the characters after
  // the http[s]); in other words, the part after the host of the url address.
  // /^https?:\/\/[^\/]+(.*)/)[1]
  function(details) {
    //console.log(details.url.match(/(.*)/)[1]);
    //console.log("Redirecting from:" + details.url);
    //console.log("Redirecting to: https://old.reddit.com" + details.url.match(/^https?:\/\/[^\/]+(.*)/)[1]);
    return {redirectUrl: "https://old.reddit.com" + details.url.match(/^https?:\/\/[^\/]+(.*)/)[1]};
  }, 
  {
    urls: [
      "*://www.reddit.com/*"
    ]
  },
  ["blocking"]
);