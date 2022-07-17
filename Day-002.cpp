//variables and constant
#include<iostream>
using namespace std;
int main (){
    int no_of_rooms(0);
    const float cost_per_room{30.0};
    const int validity{30};
    float tax{0};
    const float tax_rate{0.06};
    float cost(0);
    float total{0};
    
    cout << "welcome to carpet cleaning service" << endl;
    cout << "enter the number of rooms you want to clean" << endl;
    cout << "cost per rooom is $" << cost_per_room << endl;
    cin >> no_of_rooms;
    cost = no_of_rooms * cost_per_room ;
    tax = cost * tax_rate;
    total = cost + tax;
    cout << "Your total cost including tax" << total << endl;
    cout << "this is valid for" << validity << "days" << endl;

        
return 0;
}