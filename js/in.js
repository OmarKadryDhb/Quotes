
document.getElementById("header").innerHTML = "Quote of the Day"
var q1=document.getElementById("q1")
var q2=document.getElementById("q2")




function nextQuote() {
    var R =Math.trunc(Math.random()*6+1);
    while (R!=6) {
        console.log(R);
    if (R==1) {
        document.getElementById("q1").innerHTML="“Be yourself; everyone else is already taken.”" ;
        document.getElementById("q2").innerHTML="― Oscar Wilde";
    }
    else if (R==2) {
        document.getElementById("q1").innerHTML="“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
        document.getElementById("q2").innerHTML="― Albert Einstein";
    }
    else if (R==3) {
        document.getElementById("q1").innerHTML="“So many books, so little time.”";
        document.getElementById("q2").innerHTML="― Frank Zappa";
    }
    else if (R==4) {
        document.getElementById("q1").innerHTML="“A room without books is like a body without a soul.”";
        document.getElementById("q2").innerHTML="― Marcus Tullius Cicero";
    }
    else if (R==5) {
        document.getElementById("q1").innerHTML="“You only live once, but if you do it right, once is enough.”";
        document.getElementById("q2").innerHTML="― Mae West";
    }
    R =Math.trunc(Math.random()*6+1);
    }
}
