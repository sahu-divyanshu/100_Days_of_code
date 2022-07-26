#include<iostream>
using namespace std;
// Display a number
int add(int,int);// function prototype
int main()
{
    int sum;
    sum = add(100,78); // calling the function and storing the returned value in sum
    cout << "100 + 78 =" << sum << endl; 
    return 0;
}
int add(int a,int b){
    return (a+b);
}