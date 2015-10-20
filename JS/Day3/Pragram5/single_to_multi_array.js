var intarr = new Array('00', '01', '11', '10', '11', '00')
    string = intarr.toString().replace(/,/g , "");
    finArr = (""+string).split("");
    arrA = new Array()
    arrB = new Array()
    multiArr = new Array()

function isEven( element, index ) {
    if(index % 2 != 0 ) {
        arrA.push(element)
    } else {
        arrB.push(element)
    }
}

multiArr.push(arrA)
multiArr.push(arrB)

finArr.findIndex(isEven)
console.log(multiArr)