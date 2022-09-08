#include<iostream>
#include<vector>
using namespace std;
void insertionSort(int arr[],int n){
    for(int i = 1;i <n; i++){
        int temp = arr[i];
        int j = i - 1;
        while (j>=0){
            if (arr[j] > temp){
                // shift
                arr[j+1] = arr[j];
            }
            else{
                break;
            } 
            j--;
        }
        arr[j+1] = temp;
    }
}
void bubbleSort(int arr[], int n)
{   
    for(int i=0 ; i<n;i++){
        bool swapped = false;
        for(int j=0; j<n-1;j++){
            if (arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
}
void selectionSort(int arr[], int n)
{   
    for (int i = 0;i<n-1; i++){
        int minIndex = i;
        
        for(int j= i+1; j<n;j++){
            if(arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr[minIndex],arr[i]);
    }
}
void printArray(int arr[],int n){
    for (int i=0;i <n;i++)
        cout << arr[i] << " ";
}
int main(){
    int arr[6] = {4,3,7,6,9,2};
    selectionSort(arr,6);
    bubbleSort(arr,6);
    insertionSort(arr,6);
    printArray(arr,6);
    return 0;
}
