#include<iostream>
#include"Account.h"
using namespace std;
int main (){

    Account frank_account;
    frank_account.set_name("frank's account");
    frank_account.set_balance(1000.0);

    if (frank_account.deposit(200.0))
        cout << "Deposit ok" << endl;
    else 
        cout << "Deposit not allowed" <<endl;

    if (frank_account.withdraw(500.0))
        cout << "Withdraw ok" << endl;
    else 
        cout << "not sufficient funds" << endl;

    if (frank_account.withdraw(1500.0))
        cout << "Withdraw ok" << endl;
    else 
        cout << "not sufficient funds" << endl;

return 0;
}