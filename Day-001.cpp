/* semantic error*/
/*
#include<iostream>
using namespace std;
int main (){
    cout << ("hello")/7 << endl;
return "d";
}
*/
/* compiler warnings */
#include<iostream>
using namespace std;
int main (){
    int favourite_no; /*not initialised*/
    cout << favourite_no << endl;
return 0;
}
/* linker error*/
/*
#include<iostream>
extern int x;
using namespace std;
int main (){
    cout << x;
return 0;
} 
*/ 
/*section challange*/
  #include <iostream>
  using namespace std;
int main() 
{
	int favourite_number;
	
	cout <<"enter your favourite no";
	cin >> favourite_number;
	cout << "amazing thats my favourite number too" <<endl;
	cout << " no really, "<<favourite_number << " is my favourite number"<<endl;
	return 0;
}
