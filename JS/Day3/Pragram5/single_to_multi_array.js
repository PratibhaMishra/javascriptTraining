var intarr = new Array('00', '01', '11', '10', '11', '00')
    string = intarr.toString().replace(/,/g , "");
    finArr = (""+string).split("");
    multiArr = new Array();

function isEven(element, index){
  if(index % 2 != 0 ){
    if(index < multiArr.length){
      multiArr.splice(0, 1, element);
    } else {
      multiArr.push(element)
    }
  } else {
    if(index < multiArr.length){
      multiArr.splice(1, 1, element);
    } else {
      multiArr.push(element)
    }
  }
}

console.log(finArr)
finArr.findIndex(isEven)
console.log(multiArr)