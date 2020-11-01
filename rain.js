//exercises 1
//***************************************************** */
array1 = ['a','b']
array = ['a','b','c']
reflect= (input) =>{
    for(let k = 0; k < input.length; k++){

    console.log(input[k].repeat(input.length))
  } 
}
var swap = (array, frstElm, scndElm) =>{

    var temp = array[frstElm];
    array[frstElm] = array[scndElm];
    array[scndElm] = temp;
}

var permutation =(array, leftIndex, size)=>{

    if(leftIndex === size) {

        temp = "";

        for (var i = 0; i < array.length; i++) {
            temp = temp + array[i] ;
        }
        console.log(temp);

    } else {
        for( let x = leftIndex; x < size; x++) {
            swap(array, leftIndex, x);
            permutation(array, leftIndex + 1, size);
            swap(array, leftIndex, x);
        }
    }
}
array1.forEach(element => console.log(element));
reflect(array1)
permutation(array1, 0, array1.length );

array.forEach(element => console.log(element));
reflect(array)
permutation(array, 0, array.length );

//exercies 2
//***************************************************** */
let array2 = [[2,1,3],[5,4,6],[7,8,9]]
let set = array2.sort(
    compare = (a, b)=>{
        return a - b
    }
    
);
var end = set.length -1
for(var k = end; k >= 0; k--){
  console.log(set[k].sort())
}












































































































