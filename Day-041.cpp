#include<iostream>
#include<vector>
using namespace std;
vector<int> reverse(vector<int> v){
    int s = 0;
    int e = v.size()-1;
    while(s<e){
        swap(v[s++],v[e--]);
    }
    return v;
}
vector<int> findArraySum(vector<int>&a, int n, vector<int>&b, int m) {
	int i = n-1;
    int j = m-1;
    vector<int> ans;
    int carry = 0;
    
    while(i>=0 && j>=0){
        int val1 = a[i];
        int val2 = b[j];
        
        int sum = val1 + val2 + carry;
        
        carry = sum/10 ;
        sum = sum%10;
        ans.push_back(sum);
        i--;
        j--;
    }
    //First case
    while(i>=0){
        int sum = a[i] + carry;
        carry = sum /10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
    }
    //Second case
    while(j>=0){
        int sum = b[j] + carry;
        carry = sum /10;
        sum = sum % 10;
        ans.push_back(sum);
        j--;
    }
    // Last case
    while(carry != 0){
        int sum = carry;
        carry = sum/10;
        sum = sum % 10;
        ans.push_back(sum);
    }
    return reverse(ans);
    
}

int main (){
    vector<int> arr1{2,3,4};
    vector <int> arr2{5,6,7,8},temp;
 
    temp=findArraySum(arr1,3,arr2,4);
    for(int i=0;i<temp.size();i++){
        cout<<temp.at(i)<<endl;
    }
return 0;
}