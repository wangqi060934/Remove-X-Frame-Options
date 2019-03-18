
### Usage
We cann't load a url in a iframe if the response headers contains `"x-frame-options"` = `"SAMEORIGIN"`.  
The console will prompt you that `"Refused to display '***' in a frame because it set 'X-Frame-Options' to 'sameorigin'"`.  
This chrome extension is to remove the `"x-frame-options"` in the response headers.

### Reference
- https://gist.github.com/dergachev/e216b25d9a144914eae2
- https://developer.chrome.com/extensions/webRequest
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived