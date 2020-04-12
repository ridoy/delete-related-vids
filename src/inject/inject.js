chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        console.log('Inject script working');
        tryDeletingNode();
	}
	}, 10);
});

function tryDeletingNode() {
    let div = document.getElementById('secondary');
    if (div != null) {
        div.parentNode.removeChild(div);
    } else {
        setTimeout(tryDeletingNode, 500);
    }
}
