
### Usage
We cann't load a url in a iframe if the response headers contains `"x-frame-options"` = `"SAMEORIGIN"`.  
The console will prompt you that `"Refused to display '***' in a frame because it set 'X-Frame-Options' to 'sameorigin'"`.  
This chrome extension is to remove the `"x-frame-options"` in the response headers.