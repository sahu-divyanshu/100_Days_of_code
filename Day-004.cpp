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

#include<iostream>
using namespace std;
int main()
{
	int num1(10);
	int num2(20);
	num1 = num2 = 1000; // same value is assigned to both
	cout<<"num1 is" << num1<<endl;
	cout<<"num2 is" << num2<<endl;
	
	num1 = num2 ; //2nd ki value 1st me aa jayegi
	cout<<"num1 is" << num1<<endl;
	cout<<"num2 is" << num2<<endl;
	
	cout<<endl;
	return 0;
}
#include<iostream>
using namespace std;
int main ()
{
	const double usd_per_eur(1.19);
	double euro(0.0);
	double usd(0.0);

	cout<<"enter the value of euro you want to convert in usd"<<endl;
	cin>>euro;
	usd = euro*usd_per_eur;
	cout <<euro<<" eoros are equivalent to "<<usd<<" dollar";
}
 