chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.method == "getSelection")
		{
			var selText = window.getSelection().toString();
      sendResponse({data: selText});
		}    
		else
		{
			alert("Got a DOM content.");
      sendResponse({});
		}
});