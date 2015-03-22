function run (x){
frm.result.value += x;
}


function runplus (){
frm.result.value += "+";
}

function runsub()
{document.frm.result.value += "-";}

function runmult()
{document.frm.result.value += "*";}

function runpoint()
{document.frm.result.value += ".";}


function perc(){

     var pct = eval(document.frm.result.value);
   
     document.frm.result.value = (pct/100);
    
    }

function rundiv()
{document.frm.result.value += "/";}


function evalu (){

var evalo = eval(frm.result.value);

frm.result.value = evalo;
}