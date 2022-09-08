#include<iostream>
using namespace std;
void merge(int *arr,int s ,int e){

    int mid = s + (e-s)/2;

    int len1 = mid - s + 1;
    int len2 = e - mid;

    int *first = new int[len1];
    int *second = new int[len2];

    // copy values
    int mainArrayIndex = s;
    for(int i=0;i <len1;i++){
        first [i] = arr[mainArrayIndex++];
    }
    mainArrayIndex = mid+1;
    for (int i =0;i <len2;i++){
        second[i]=arr[mainArrayIndex++];
    }

    // merge two sorted array
    int index1 = 0;
    int index2 = 0;
    mainArrayIndex = s;

    while(index1 < len1 && index2 < len2){
        if(first[index1]<second[index2]){
            arr[mainArrayIndex++] = first[index1++];
        }
        else{
            arr[mainArrayIndex++] = second[index2++];
        }
    } 

    while(index1 < len1){
        arr[mainArrayIndex++] = first[index1++];
    }
    while(index2 < len2){
        arr[mainArrayIndex++] = second[index2++];
    }
}
void mergeSort(int *arr, int s, int e){
    // base case
    if(s >= e){
        return;
    }
    int mid = s + (e-s)/2;
    //left part
    mergeSort(arr,s,mid);

    //right part 
    mergeSort(arr,mid+1,e);

    // merging
    merge(arr,s,e);

}

int partition(int arr[],int s, int e){
    int pivot = arr[s];
    int cnt = 0;
    for(int i= s+1; i <=e;i++){
        if(arr[i]<= pivot){
            cnt++;
        }
    }
    // right place of povit
    int pivotIndex = s +cnt;
    swap(arr[pivotIndex],arr[s]);

    // left and right wala part sambhal lete hai
    int i = s,j = e;
    while(i<pivotIndex && j>pivotIndex){
        while(arr[i]<pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i<pivotIndex && j>pivotIndex){
            swap(arr[i++],arr[j--]);
        }
    }
    return pivotIndex;

}

void quickSort(int arr[],int s,int e){
    // base case
    if(s>=e){
        return;
    }
    //partion
    int p = partition(arr,s,e);

    // left part
    quickSort(arr,s,p-1);

    //right part 
    quickSort(arr,p+1,e);

}

int main (){
    int arr[5] = {2,5,1,6,9};
    int n = 5;

  //  mergeSort(arr,0,n-1);
    quickSort(arr,0,n-1);
    for(int i = 0;i<n;i++){
        cout << arr[i] << " ";
    }
    cout << endl;
return 0;
}