
let appartments = [
    {
        name: "Saima Pride Aparatment",
        img: "saima.jpeg",
        description: "240 sq ft, 5 bedrooms, 1 lounge, 1 drawing room, 1 kitchen, 4th floor",
        price: 40000,
        owner: "Javed Altaf",
        rented: "no"
    },
    {
        name: "B4 Latifi Housing",
        img: "latifi.jpeg",
        description: "240 sq ft, 4 bedrooms, 1 lounge, 1 drawing room, 2 kitchen, 2 floors",
        price: 80000,
        owner: "Fahim Junaid",
        rented: "no"
    },
    {
        name: "C90 Malir Cantt",
        img: "malir.jpg",
        description: "600 sq ft, 2 story, 8 bedrooms, 2 lounge, 1 drawing room, 2 kitchen",
        price: 100000,
        owner: "Zahida Abeer",
        rented: "no"
    }
];
let name = appartments.map(a => a.name);
let img = appartments.map(a => a.img);
let desc = appartments.map(a => a.description);
let price = appartments.map(a => a.price);
let rented = appartments.map(a => a.rented);
let owner = appartments.map(a => a.owner);
var i;
function getForRent(){
    for (i = 1; i <= appartments.length; i++){
       if (appartments[i].rented != "no"){
            let x = "xyz";
            "<div class=\"card\"><div class=\"row g-0\"><div class=\"col-md-4\"><img src=\"" + appartments[i].img + "\" class=\"img-fluid rounded-start\" alt=\"...\"></div> <div class=\"col-md-8\"><div class=\"card-body\"><h5 class=\"card-title\">" + appartments[i].name + "</h5><p class=\"card-text\">" + appartments[i].description + "</p><p class=\"card-text\"><b>" + appartments[i].price + "</b></p><br><br><br><br><a href=\"#\" class=\"btn btn-primary\">Rent</a></div></div></div></div>";
            
            document.getElementById("cards").innerHTML += x;
       }
    }
}

function extractValue(prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}


function getToRent(){
    for (var i = 0; i > appartments.length; i++){
        if (appartments[i].owner == "Moasfar Javed"){
            let x = "xyz";
            "<div class=\"card\"><div class=\"row g-0\"><div class=\"col-md-4\"><img src=\"" + appartments[i].img + "\" class=\"img-fluid rounded-start\" alt=\"...\"></div> <div class=\"col-md-8\"><div class=\"card-body\"><h5 class=\"card-title\">" + appartments[i].name + "</h5><p class=\"card-text\">" + appartments[i].description + "</p><p class=\"card-text\"><b>" + appartments[i].price + "</b></p><br><br><br><br><a href=\"#\" class=\"btn btn-primary\">Rent</a></div></div></div></div>";
            
            document.getElementById("cards").innerHTML += x;
        }
    }
}
function addToRent(){
    let x = "xyz";
            "<div class=\"card\"><div class=\"row g-0\"><div class=\"col-md-4\"><img src=\"" + appartments[i].img + "\" class=\"img-fluid rounded-start\" alt=\"...\"></div> <div class=\"col-md-8\"><div class=\"card-body\"><h5 class=\"card-title\">" + appartments[i].name + "</h5><p class=\"card-text\">" + appartments[i].description + "</p><p class=\"card-text\"><b>" + appartments[i].price + "</b></p><br><br><br><br><a href=\"#\" class=\"btn btn-primary\">Rent</a></div></div></div></div>";
            
            document.getElementById("cards").innerHTML += x;
}