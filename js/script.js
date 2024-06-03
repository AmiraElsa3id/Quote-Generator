var quotes=[
    {aName:"Oscar Wilde",aQuote:"Be yourself; everyone else is already taken."},
    {aName:"Albert Einstein",aQuote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    {aName:"Marcus Tullius Cicero",aQuote:"A room without books is like a body without a soul."},
    {aName:"Bernard M. Baruch",aQuote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
    {aName:"William W. Purkey",aQuote:`You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`},
    {aName:"Dr. Seuss",aQuote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams."},
    {aName:"Mae West",aQuote:"You only live once, but if you do it right, once is enough."},
    {aName:"Mahatma Gandhi",aQuote:"Be the change that you wish to see in the world."},
    {aName:"Mark Twain",aQuote:"If you tell the truth, you don't have to remember anything."},
    {aName:"Elbert Hubbard",aQuote:"A friend is someone who knows all about you and still loves you."},
    {aName:"Ralph Waldo Emerson",aQuote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."}
]

var quoteContent=document.getElementById("quoteContent");
var newQuote=document.getElementById("newQuote");
var authName=document.getElementById("authName");
var autherImg=document.getElementById("autherImg");
var prevQuote;
changeQuote()
newQuote.onclick=changeQuote;

var randomNum =Math.round(Math.random())*10;
prevQuote=randomNum;
function changeQuote(){
    while(true){
        if(randomNum!==prevQuote){
            autherImg.innerHTML=`<img src="assets/imgs/${quotes[randomNum].aName}.jpg">`
            quoteContent.innerHTML=quotes[randomNum].aQuote;
            authName.innerHTML=quotes[randomNum].aName;
            // console.log("prequote= ",prevQuote)
            prevQuote=randomNum;
            // console.log("randomnum= ",randomNum)
            break;
        }
        else{
            randomNum =Math.round(Math.random()*10);
            // console.log(randomNum);
        }
    }
}