function pageScanner (pageno, callback){
    if(document.getElementById("page" + pageno)){
        if(spamlog){
            console.log("pageScanner: found page " + pageno);
        }
        clearInterval(scanner);
        scanner = setInterval(function(){pageScanner(pageno+1, pageHandler)}, 300);
        callback(1,document.getElementById("page" + pageno), function(){});
    } else {
        if(spamlog){
            console.log("pageScanner: scanning for page " + pageno);
        }
    }
}

function pageHandler(whitelist, elements, callback){
    //WHITELIST HERE, CASE INSENSITIVE
    var whitelist = ['vr ', ' vr',
					'oculus ', ' oculus',
					'vive ', ' vive ',
					'steamvr ', ' steamvr',
					'rift ', ' rift'];
    

    //List of divs in the current page
    var pageText = elements.getElementsByClassName("apphub_CardTextContent");
    if(spamlog){
        console.log("pageHandler: number of items in page: " + pageText.length);
    }
    
    //Iterate through the elements, delete if no whitelist words are found
    var i,j;
    var isWhiteListed;
    for(i = 0; i < pageText.length; i++){
        isWhiteListed = false;
        for(j=0; j < whitelist.length; j++){
                if(pageText[i].innerText.toLocaleLowerCase().includes(whitelist[j])){
                    isWhiteListed = true;
                } else {
                    //probably make a second white/blacklist pass through callback
                }
        }
        //handle unmatched text divs here
        if(!isWhiteListed){
            if(spamlog){
                console.log("pageHandler: handling text " + i);
            }
            //this.remove() also removes the reference from the array so scan backwards if removing or change index or map.reduce
            //pageText[i].parentElement.parentElement.parentElement.style.border = "5px solid blue";
            pageText[i].parentElement.parentElement.parentElement.style.opacity = 0.3;
        } else{
            if(spamlog){
                console.log("pageHandler: ignoring text " + i);
            }
        }
    }
    if(spamlog){
        console.log("pageHandler: finished");
    }
}

if(spamlog){
    console.log("STARTING");
}

var spamlog = true;
var scanner = setInterval(function(){pageScanner(1, pageHandler)}, 300);

