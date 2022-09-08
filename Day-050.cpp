#include<iostream>
using namespace std;

int getSum(int *arr,int size){
    // base case
    if(size == 0){
        return 0;
    }
    if(size == 1){
        return arr[0];
    }
    int remainingPart = getSum(arr+1,size-1);
    int sum = arr[0] + remainingPart ;
    return sum;
}

void print(int arr[],int n){
    cout << "size of array is " << n << endl;

    for(int i = 0 ; i < n ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

bool linearSearch(int arr[],int size,int k){
    print(arr,size);

    // base case
    if(size == 0){
        return false;
    }
    if(arr[0]==k){
        return true;
    }
    else {
        bool remainingPart = linearSearch(arr+1,size-1,k);
        return remainingPart;
    }
}

int binarySearch(int *arr,int s,int e,int k){
    // base case
    if(s>e)
        return -1;
    
    int mid = s +(e-s)/2;

    //element found
    if(arr[mid] == k )
        return mid;

    if(arr[mid] < k){
        return binarySearch(arr,mid+1,e,k);
    }
    else{
        return binarySearch(arr,s,mid-1,k);
    }
}

int main (){
    int arr[5] = {2,4,7,9,9};
    int size = 5;
    int sum = getSum(arr, size);
    cout << "sum is " << sum << endl;
    cout << "linear search " << linearSearch(arr,size,9) << endl ;
    int ans = binarySearch(arr,0,4,9);
    cout << "binary search " << ans << endl;
    return 0;
}

