var obj1 = { name: 'Aditya', surname: 'Hegde', grad:'MCA' }
var obj2 = { name: 'Rajni', surname: 'Hegde', grad:'BCom' }
var obj3 = { colg: 'SIBAR', location:'Pune' }

function merge(objA, objB) {
    if ( typeof objA !== 'object' ) {
        objA = {};
    }
    for (var property in objB) {
        if ( objB.hasOwnProperty(property) ) {
            var sourceProperty = objB[ property ];
            if ( typeof sourceProperty === 'object' ) {
                objA[ property ] = objA[ property ], sourceProperty;
                continue;
            }
            objA[ property ] = sourceProperty;
        }
    }
    for (var a = 2, l = arguments.length; a < l; a++) {
        merge(objA, arguments[a]);
    }
    return objA;
};

console.log(merge(obj2, obj1))
console.log(merge(obj3, obj1))