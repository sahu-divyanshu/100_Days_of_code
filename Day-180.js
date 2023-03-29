function fab(n){
    var arr = [];
    if(n === 1){
        arr = [0];
    }
    else if(n===2) {
        ans = [0,1];
    }
    else{
        arr = [0,1];
        for (var i = 2 ; i<n ;i++){
            arr.push(arr[arr.length -2] +arr[arr.length -1] );
        }
    }
    return arr;
}
arr = fab(6);
console.log(arr)