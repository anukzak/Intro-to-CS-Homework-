//exercises 1 watch bellow 
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

//adddition new one 


_-------exercise 1-------____----
array = ['a','b','c']
reflect= (input) =>{
    for(let k = 0; k < input.length; k++){
        for(let g = 0 ; g <=input.length; g++){
            console.log(input[k].repeat(g))
        }
  } 
}
var swap = (array, frstElm, scndElm) =>{

    var temp = array[frstElm];
    array[frstElm] = array[scndElm];
    array[scndElm] = temp;
}

var permutation =(array, fistindex,size )=>{

    if(fistindex === size) {

        temp = "";

        for (var i = 0; i < array.length; i++) {
            temp = temp + array[i] ;

            if(temp.length > 1){
                console.log(temp);
            }else{
                console.log('')
            }
            //console.log(temp);
        }
        

    } else {
        for( let x = fistindex; x < size; x++) {
            swap(array, fistindex, x);
            permutation(array, fistindex + 1, size);
            swap(array, fistindex, x);
        }
    }
}
reflect(array)
permutation(array, 0, array.length );
*/


//exercsie 2 
//***********************************************
//option 1

let array2 = [[2,1,3],[7,8,9],[5,4,6]]

let set = array2.sort(
    compare = (a, b)=>{
        return a - b
    }
    
);
var end = set.length -1
for(var k = end; k >= 0; k--){
  console.log(set[k].sort())
}

//option 2

function bubbleSort(array) {
    var result = false;
    while (!result) {
      result = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
} 
console.log(bubbleSort(array2))
for(let i = 0; i < array2.length; i++){
    let set2 = bubbleSort(array2[i])
    console.log(bubbleSort(array2[i]));
}

function reverse(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
}
  
console.log(reverse(array2));








































































































