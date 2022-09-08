class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int nonZero = 0;
        
        for(int j=0; j<nums.size() ;j++){
            
            if( nums[j] != 0 ){
                swap(nums[j], nums[nonZero]);
                nonZero++ ;
            } 
        }
    }
};
#include<vector>
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector <int> temp(nums.size());
       // rotating array and storing it in temp
        for(int i = 0;i < nums.size();i++){
            temp[(i+k)%nums.size() ] = nums[i];
        }
        //copy temp into num vector
        nums = temp;
    }
};
class Solution_1 {
public:
    bool check(vector<int>& nums) {
        int count = 0;
        int n = nums.size();
        // chcking rotated
        for(int i = 1; i<n ;i++){
            if(nums[i-1] > nums[i])
                count ++;
        }
        
        if(nums[n-1] > nums[0])
            count ++;
        
        return count <= 1;
    }
};