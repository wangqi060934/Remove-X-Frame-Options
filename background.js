//https://gist.github.com/dergachev/e216b25d9a144914eae2
//https://developer.chrome.com/extensions/webRequest
//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
function removeXFrameOptions(details){
    let headers = details.responseHeaders
    // console.log(headers)
    if(headers){
        headers = headers.filter(function(header){
            return header.name.toLowerCase() !== 'x-frame-options'
        }) 
    }
    return {responseHeaders: headers}
}

chrome.webRequest.onHeadersReceived.addListener(
    removeXFrameOptions,
    {urls: ['<all_urls>']},
    ["blocking", "responseHeaders"]
)