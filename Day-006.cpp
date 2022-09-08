// conversion of pennies into all US currency
#include<iostream>
using namespace std;
int main (){
    int amount{},running_balance{},dollars{},quarters{},dimes{},nickels{},pennies{};

    const int dollar_value{100},quarter_value{25},dime_value(10),nickel_value{5}; 
    // with using modlus operator

    cout << "enter the amount in pennies" << endl;
    cin >> amount;
    dollars = amount/dollar_value;
    running_balance = amount - (dollars*dollar_value);
    
    quarters = running_balance/quarter_value;
    running_balance -= quarters *quarter_value;

    dimes = running_balance/dime_value;
    running_balance -= dimes*dime_value;

    nickels = running_balance/nickel_value;
    running_balance -= nickels * nickel_value;

    pennies = running_balance;

    cout << "dollars = " << dollars << endl;
    cout << "quarters = " << quarters << endl;
    cout << "dimes = " << dimes << endl;
    cout << "nickels = " << nickels << endl;
    cout << "pennies = " << pennies << endl;

return 0;
} 