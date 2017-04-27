var keys = {};
//keys is the json object
for (key in keys){
    // console.log("printing the keys$$$$$",key);
    $.getJSON("secret_json/"+key+".json", function(json) {
        console.log(json["news_title"]);
    });

}