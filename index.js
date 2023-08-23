let arr = [11,12,13,15,16,17];

let missingNumber;

for(i=0; i<arr.length-1; i++){
    if(arr[i+1]-arr[i] >1){
        
        missingNumber = arr[i]+1;
        break;
        
    }
}

console.log(missingNumber);