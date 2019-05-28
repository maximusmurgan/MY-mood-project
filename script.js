var happyImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDpJySewuhBEreoxLDBbVofhSkK94WW6T6vxc_to7Eo2QLoy4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOCwTKGvzQe8hnMmkVtjUcMZrf1HFhsbAU8DVyG_K4LnKBXQsmw"
];
var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];
var angryImages = ["https://blogs.oxford.anglican.org/wp-content/uploads/2017/02/anger1-1024x576.jpg","https://www.improvisedlife.com/cms/wp-content/uploads/2017/11/angry-emoji-1.jpg","https://d21tktytfo9riy.cloudfront.net/wp-content/uploads/2019/01/23140919/dream_blast_icon.jpg"];
var cuteImages = ["https://i.redd.it/gvt656wazd121.jpg","https://meme.xyz/uploads/posts/t/l-7982-it-felt-cute.jpg","https://www.dailydot.com/wp-content/uploads/2019/04/feeling-cute-might-delete-later-meme.png" ];


$('button').click(function(){
    var mood = $('input').val();
    $(".images").html("");
    if(mood === "ecstatic") {
         $(happyMood).show();
         }
    if(mood === "livid") {
         $(angryMood).show();
         }    
    if(mood === "depressed") {
         $(sadMood).show();
         } 
    if(mood === "cute") {
         $(cuteMood).show();
         }       
});



function happyMood(){
     changeBackgroundColor("yellow");
    displayImages(happyImages);
    
}
function sadMood(){
changeBackgroundColor("blue");
    displayImages(sadImages);
    changeTextColor("white");
}
function angryMood(){
 changeBackgroundColor("red");
    displayImages(angryImages);

}
function cuteMood(){
    changeBackgroundColor("pink");
    displayImages(cuteImages);
    changeTextColor("white");
}

function changeBackgroundColor(color){
    $("body").css("background-color", color);
}

function changeTextColor(color){
    $("body").css("color", color);
}

function displayImages(images){
 images.forEach(function(element) {
       $(".images").append("<img src='" + element + "' />");
}); 
}


