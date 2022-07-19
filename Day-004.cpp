#include<iostream>
#include<vector>
using namespace std;
int main (){
    vector<int>first;
    vector<int>second;

     
    first.push_back(10);
    first.push_back(20);

    cout << "first vector" <<endl;
    cout << first.at(0) << endl;
    cout << first.at(1) << endl;
    cout << first.size() << endl;

    second.push_back(100);
    second.push_back(200);

    cout << "second vector" << endl;
    cout << second.at(0) << endl;
    cout << second.at(0) << endl;
    cout << second.size() << endl;

    vector < vector <int>> vector_2d;
    vector_2d.push_back(first);
    vector_2d.push_back(second);

    cout <<"2d vector"<<endl;
    cout << vector_2d.at(0).at(0) << "  " << vector_2d.at(0).at(1) << endl;
    cout << vector_2d.at(1).at(0) << "  " << vector_2d.at(1).at(1) << endl;

    first.at(0) = 1000;
    cout <<"2d vector"<<endl;
    cout << vector_2d.at(0).at(0) << "  " << vector_2d.at(0).at(1) << endl;
    cout << vector_2d.at(1).at(0) << "  " << vector_2d.at(1).at(1) << endl;

    cout << "first vector" <<endl;
    cout << first.at(0) << endl;
    cout << first.at(1) << endl;

return 0;
}