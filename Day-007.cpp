#include<iostream>
using namespace std;
int main(){
	int length,width,hight,volume;
	double base_cost(100.0);

	cout<<"enter the length, width & hight of box respectively in inches & it should be less than 10"<<endl;
	cin>> length >> width >> hight;
	
	volume = length * width * hight;
	if (length>10||width>10||hight>10)
	cout<<"dimensions are bigger than we excepted"<<endl;
	else
	
	{
	float cost;
	cost=base_cost;
	if (volume>=100&&volume<500)
	
	{cost = cost + (cost*10/100);
	cout << "cost is" << cost << endl;}


	if (volume>=500)

	{cost = cost +(cost*25/100);
	cout << "cost is"<< cost  <<endl;}
    
    else if (volume>=100)
	
	{cost = cost + (cost*10/100);
	cout << "cost is" << cost << endl;}

	else 
	cout<<"cost is"<< cost <<endl;
	
}
return 0;

}