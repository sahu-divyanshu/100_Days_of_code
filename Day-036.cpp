#include<iostream>
using namespace std;

int firstOcc(int arr[],int n ,int key){
    int s = 0,e = n-1;
    int mid = s + (e-s)/2;
    int ans = -1;
    
    while(s<=e){
        if(arr[mid] == key){
            ans = mid;
            e = mid - 1;
        }
        else if(key > arr[mid]){//right aa jao
            s = mid + 1 ;
        }
        else if(key < arr[mid]){// left aa jao
            e = mid - 1;
        }
        mid = s + (e-s)/2;
    } return ans;
}
int lastOcc(int arr[],int n ,int key){
    int s = 0,e = n-1;
    int mid = s + (e-s)/2;
    int ans = -1;
    
    while(s<=e){
        if(arr[mid] == key){
            ans = mid;
            s = mid + 1;
        }
        else if(key > arr[mid]){//right aa jao
            s = mid + 1 ;
        }
        else if(key < arr[mid]){// left aa jao
            e = mid - 1;
        }
        mid = s + (e-s)/2; 
    } return ans;
}
int main (){
    int even[8] = {1,2,3,3,3,3,3,5};
    cout << "first occourance of 3 is " << firstOcc(even,8,3) << endl;
    cout << "last occourance of 3 is " << lastOcc(even,8,3) << endl;
    cout << "total no of occourance " << lastOcc(even,8,3) - firstOcc(even,8,3) ;
    return 0;
}