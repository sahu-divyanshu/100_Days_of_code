#include<iostream>
using namespace std;
#include<string>
void sayDigit(int n,string arr[]){
    // Base Case
    if(n==0)
        return;
    
    //processing
    int digit = n % 10;
    n = n/10;

    //recursive call
    sayDigit(n,arr);
    
    cout << arr[digit] << " ";
}
void reverse(string& str,int i,int j){
    
    // base case
    if(i>j){
        return;
    }

    swap(str[i],str[j]);
    i++;
    j--;

    //recursion call
    reverse(str,i,j);
}
int power(int a,int b){
    //base case
    if(b==0)
        return 1;
    
    if(b==1)
        return a;

    int ans = power(a,b/2);

    //if b is even
    if(b%2){
        return ans * ans;
    }
    else{//if b is odd
        return a* ans * ans;
    }
}
int main (){
    string arr [] = {"zero", "one", "Two", "three" , "four"
              "five","six" ,"seven","eight","nine"};
    cout << "enter a no." << endl;
    int n;
    cin >> n;
    sayDigit(n, arr);
    cout << endl <<endl;
    string name ="abcde";
    reverse(name,0,name.length()-1);
    cout << name << endl;
    cout << power(3,5);
    return 0;
}