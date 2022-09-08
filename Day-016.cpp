#include<iostream>
#include<string>

using namespace std;

class Player
{
    private:
    std::string name{"XXX"};
    int health;
    int xp;

    public:
    //overloaded constructors
    Player();
    Player(std::string name_val);
    Player(std::string nsme_val,int health_val,int xp_val);
};
// Constructer initialisation list 
Player::Player()
    :name{"none"},health{0},xp{0}{

    }
Player::Player(std::string name_val)
    :name{name_val},health{0},xp{0} {

    }
Player::Player(std::string name_val,int health_val,int xp_val)
    :name{name_val},health{health_val},xp{xp_val}{

    }
int main(){
    Player empty;
    Player frank{"Frank"};
    Player divyanshu{"Divyanshu",100,100};
    return 0;
    }