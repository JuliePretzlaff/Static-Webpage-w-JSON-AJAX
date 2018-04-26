var btnCounter = 1;

var animals = document.getElementById("animals");

var btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    //first arg = send or recieve,  second = url from which we get JSON info
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + btnCounter + '.json')
    btnCounter++;
    if (btnCounter > 3) {
        btn.classList.add("hide-me");
    }
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
    var htmlString = "";
    //for loop to concatinate each object info into a sentence
    for (var i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii]

            }
            else {
                htmlString += " and " + data[i].foods.likes[ii]
            }
        }

        htmlString += " and dislikes ";

        for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii]

            }
            else {
                htmlString += " and " + data[i].foods.dislikes[ii]
            }
        }

        htmlString += ".</p>"
    }
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
