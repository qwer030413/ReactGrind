var myUrl = chrome.runtime.getURL("index.html");
// const chances = document.getElementById("chance");

// const values = [];
// function setter(){
    
// }

function opener() {
    var x = Math.floor((Math.random() * 2) + 1);
    // for(let i = 0; i < chances.value; i++)
    // {
    //     values.push(i);
    // }
    // for(let i = 0; i < values.length; i++){
    //     console.log(values[i]);
    // }
    
    // if (values.find((element) => element == x)) {
	// chrome.tabs.create({
	//     url: myUrl
	// });
    // }
    if(x == 1)
    {
        chrome.tabs.create({
            url: myUrl
        });
    }
    
}

chrome.tabs.onCreated.addListener(opener);