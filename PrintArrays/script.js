function printArrays(arr){
  console.log('***********');
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

var arrOne = [1,2,3,4];
var arrTwo = [10,20,30,40];
var arrThree = [1000,2000,3000,4000];

printArrays(arrOne);
printArrays(arrTwo);
printArrays(arrThree);