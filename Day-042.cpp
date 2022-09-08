   #include<iostream>
   #include<vector>
   using namespace std;
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = 0, j = 0,k=0;
        vector<int> nums3(m+n);
        while( i<m && j<n){
            if(nums1[i]<nums2[j]){
                nums3[k++] = nums1[i++];
            }
            else {
                nums3[k++] = nums2[j++];
            }
        }
            while(i<m){
                nums3[k++] = nums1[i++];
            }
            while(j<n){
                nums3[k++] = nums2[j++];
            }
         nums1 = nums3; 
        }