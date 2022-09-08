#include<iostream>
#include<vector>
using namespace std;

vector<int> wavePrint(vector<vector<int>> arr, int nRows, int mCols)
{
    vector <int> ans ;
    for (int col = 0; col < mCols;col++){
        if(col&1){
            for(int row = nRows - 1; row >= 0; row--){
                ans.push_back(arr[row][col]);
            }
        }
        else {
            for(int row = 0;row < nRows; row++){
                ans.push_back(arr[row][col]);
            }
        }
    } 
     return ans;
}
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> ans;
        int row = matrix.size();
        int col = matrix[0].size();
        int count = 0;
        int total = row*col;
        //index initialisation
        int startingRow = 0;
        int startingCol = 0;
        int endingRow = row-1;
        int endingCol = col-1;
        
        while(count<total){
            //print starting row
           for(int index = startingCol; count<total && index <= endingCol;index++){
               ans.push_back(matrix[startingRow][index]);
               count++;
           }
            startingRow++;
            
            //Print ending column
            for(int index = startingRow; count<total && index <= endingRow;index++){
                ans.push_back(matrix[index][endingCol]);
                count++;
            }
            endingCol--;
        
            // print ending row
            for(int index =endingCol; count<total && index >= startingCol; index--){
                ans.push_back(matrix[endingRow][index]);
                count++;
            }
            endingRow --;
            
            //printing starting col
            for(int index = endingRow; count<total && index >= startingRow;index--){
                ans.push_back(matrix[index][startingCol]);
                count++;
            }
            startingCol ++;
        }
        return ans;
    }
};