var animals = document.getElementById("animals");

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    var ourRequest = new XMLHttpRequest();
    //first arg = send or recieve,  second = url from which we get JSON info
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

    //onload method.  what happens when data is loaded
    ourRequest.onload = function () {
        //test
        //console.log(ourRequest.responseText)
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0])
        renderHTML(ourData);
    };
    ourRequest.send();
});

//function to which we'll pass our data
function renderHTML(data) {
    var htmlString = "test"
    animals.insertAdjacentHTML('beforeend', htmlString);
}

////JSON object
//var myCat = {
//    "name": "BearCat",
//    "species": "cat",
//    "favorite activity" : "meowing"
//}

////JSON array
//var myFavAnimals = ["dog", "dolphin", "owl", "cat"];


////JSON array of objects
//var myPets = [
//    {
//        "name": "BearCat",
//        "species": "cat",
//        "favorite activity": "meowing"
//    },
//    {
//        "name": "Daisy Mae",
//        "species": "dog",
//        "favorite activity": "fetch"
//    }
//]

var ourRequest = new XMLHttpRequest();
//first arg = send or recieve,  second = url from which we get JSON info
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')

//onload method.  what happens when data is loaded
ourRequest.onload = function () {
    //test
    //console.log(ourRequest.responseText)
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0])

};
ourRequest.send();