    #include<iostream>
    #include<vector>
    using namespace std;

        void solve(string digit ,string output ,int index ,vector<string>& ans ,string mapping[]){
        // base case
        if(index >= digit.length()){
            ans.push_back(output);
            return;
        }
        int number = digit[index]-'0';
        string value = mapping[number];
        
        for(int i =0;i <value.length();i++){
            output.push_back(value[i]);
            solve(digit,output,index+1,ans,mapping);
            output.pop_back();
        }
    }
    vector<string> letterCombinations(string digits) {
        vector<string> ans;
        if(digits.length()==0){
            return ans;
        }
        string output;
        int index =0;
        string mapping[10] = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        solve(digits,output,index,ans,mapping);
        return ans;
    }

    class Solution {
    void solve(vector<int>nums, vector<int> output, int index, vector<vector<int>> & ans){
        if(index >= nums.size()){
            ans.push_back(output);
            return;
        }
        //exclude
        solve(nums,output,index+1,ans);
        
        //include
        output.push_back(nums[index]);
        solve(nums,output,index+1,ans);
    }
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> output;
        int index = 0;
        solve(nums,output,index,ans);
        return ans;
    }
};
class Solution {
    void solve(vector<int> nums,vector<vector<int>>& ans, int index){
        // base case
        if(index >= nums.size()){
            ans.push_back(nums);
            return;
        }
        for(int j = index ; j < nums.size();j++){
            swap(nums[index],nums[j]);
            solve(nums,ans,index+1);
            // backtrack
            swap(nums[index],nums[j]);
        }
    }
    
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        int index = 0;
        solve(nums,ans,index);
        return ans;
    }
};