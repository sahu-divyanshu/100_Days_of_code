#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    int compress(vector<char>& chars) {
        int i = 0;
        int ansIndex = 0;
        int n = chars.size();
        
        while(i<n){
            int j = i+1;
            while (j<n && chars[i] == chars[j]){
                j++;
            }
            // yaha sirf 2 cases me aaoge
            // 1. ya toh vector pura traverse kardiya
            // 2. ya fir new char aa gaya hai
            
            // old char store karlo
            chars[ansIndex++] = chars[i];
            
            int count = j - i;
            if(count > 1){
               // converting cuonting into single digit and solving in ans
                string cnt = to_string(count);
                for(char ch: cnt){
                    chars[ansIndex++] = ch ;
                }
            }
            i=j;
        }
        return ansIndex;
    }
};
