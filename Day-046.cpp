#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        
        int row = matrix.size();
        int col = matrix[0].size();
        vector<vector<int>> d;
        for(int col1=0;col1<col;col1++){
            
            vector <int> d2;
            for(int row1=row-1;row1>=0;row1--){
                
               int ele= matrix[row1][col1];
               d2.push_back(ele);
            }
            d.push_back(d2);
        }
        matrix=d;
        
    }
};