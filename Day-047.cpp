#include<iostream>
using namespace std;
int main (){
cout << "enter no. of row" << endl;
int row;
cin >> row;

cout << "enter no. of columns " << endl;
int col;
cin >> col;

// creating a 2d array using dynamic memory allocation
// This is a nothrow constant and this constant value is used as an 
//argument for operator new and operator new[] to indicate that these
// functions shall not throw an exception on failure, 
//but return a null pointer instead.(Vaise iske bina bi kaam chalra ha)
int** arr = new(nothrow) int*[row];
for(int i = 0; i < row; i++){
    arr[i] = new(nothrow) int [col]; 
}
// Taking input
cout << "enter elements" <<endl;
for(int i=0;i<row;i++){
    for(int j=0;j<col;j++){
        cin >> arr[i][j];
    }
}
// output
cout <<endl;
for(int i=0;i<row;i++){
    for(int j=0;j<col;j++){
        cout << arr[i][j] <<" ";
    }
    cout << endl;
}
// relesing memory
for (int i=0 ; i<row ; i++ ){
    delete [] arr[i];
}
delete []arr;
return 0;
}