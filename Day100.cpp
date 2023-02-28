#include<iostream>
using namespace std;
int countSetBits(int n)
    {
        int count =0;
        for(int i=0 ; i<n ; i++){ 
          while(i!=0){
             if(i&1 == 1) count++;
             i = i>>1;
         }
        }
         return count;
    }
    int main(){
        cout << countSetBits(4) << endl;
    }