var a='s';
var b='f';
var result=38;
function Main(){
    SameCase(a,b);
    return result;
}
function SameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){

        result =-1;
    }
    else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        result= 1;
        }
    else{
        result= 0;
    }
    return result;
  }
  Main();
module.exports={Main,SameCase};