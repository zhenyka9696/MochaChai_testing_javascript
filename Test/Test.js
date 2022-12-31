const {assert} = require("chai");
const {SameCase}= require('G:/JSProjects/Project2/ComparingLetterCases_v1.0.0');
function arrayRandElement(array){
      var rand=Math.floor(Math.random()*array.length);
      return array[rand];
}

var array=['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','V','v',
'W','w','X','x','Y','y','Z','z','1','2','3','4','5','6','7','8','9','0','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','№',';',':','?',' '];
var c=arrayRandElement(array);
describe("sameCase function",()=>{
    it('sameCase function, test1',()=>{
    let result= SameCase('s','f');
    assert.strictEqual(result,1);
    });
  it('sameCase function, test2',()=>{
    let result=SameCase('F', '/');
    assert.strictEqual(result,-1); 
  });
  it('sameCase function, test3',()=>{
    let result=SameCase('F', 'd');
    assert.strictEqual(result,0);
  });
  it('sameCase function, test4',()=>{
    console.log('a = '+ arrayRandElement(array));
    console.log('b = '+ arrayRandElement(array));
    let result=SameCase((arrayRandElement(array)),(arrayRandElement(array)));
    assert.strictEqual(result,1);  
  });
  it('sameCase function, test4',()=>{
    console.log('a = '+ arrayRandElement(array));
    console.log('b = '+ arrayRandElement(array));
    let result=SameCase((arrayRandElement(array)),(arrayRandElement(array)));
    assert.strictEqual(result,0);  
  });
  it('sameCase function, test4',()=>{
    console.log('a = '+ arrayRandElement(array));
    console.log('b = '+ arrayRandElement(array));
    let result=SameCase((arrayRandElement(array)),(arrayRandElement(array)));
    assert.strictEqual(result,1);  
  });
  it('sameCase function, test4',()=>{
    console.log('a = '+ arrayRandElement(array));
    console.log('b = '+ arrayRandElement(array));
    let result=SameCase((arrayRandElement(array)),(arrayRandElement(array)));
    assert.strictEqual(result,-1);  
  });

});
