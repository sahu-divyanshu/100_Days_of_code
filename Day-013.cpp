#include<iostream>
using namespace std;

unsigned long long fibonacci(unsigned long long n);


int main (){
    cout << fibonacci(5) <<endl;
    cout << fibonacci(30) <<endl;
return 0;
}
unsigned long long fibonacci(unsigned long long n) {
    if(n<=1)
        return n;
    return (fibonacci(n-1) + fibonacci(n-2)); // recursion
}