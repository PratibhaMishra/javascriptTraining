var obj1 = { name: 'Aditya', surname: 'Hegde', grad:'MCA' }
var obj2 = { name: 'Rajni', surname: 'Hegde', grad:'BCom' }
var obj3 = { colg: 'SIBAR', location:'Pune' }

function Copy( source, target ) {
    for (var property in source) {
        if (typeof source[property] === 'object') {
            target[property] = (source[property].constructor === Array)?[]:{};
            Copy(source[property],target[property]);
        } else {
            target[property] = source[property];
        }
    }
    return target;
}

function merge(objA, objB){
    var  mergeObj ={};
     for (var property in objA) { 
        if (typeof objA[property] === 'object') {     
            mergeObj[property] = (objA[property].constructor === Array)?[]:{};   
            Copy(objA[property],mergeObj[property]);   
        } 
        else mergeObj[property] = objA[property];
    } 
    for (var property in objB) { 
            if (typeof objB[property] === 'object') {     
                mergeObj[property] = (objB[property].constructor === Array)?[]:{};   
                Copy(objB[property],mergeObj[property]);   
            } else if(!objA.hasOwnProperty(property)){
                 mergeObj[property] = objB[property]; 
            }
    } 
        return mergeObj; 
}

console.log(merge(obj2, obj1))
console.log(merge(obj3, obj1))

var obj = {name : 'Pranay', qualifications : [{degree : 'BCA'}]};
var copy = merge(obj,{});

console.log(copy)

/*
copy.qualifications[0].degree = 'MCA';
console.log(copy)
console.log(obj)
*/