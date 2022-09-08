/*
#include<iostream>
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
    Player(std::string name_val,int health_val,int xp_val);
};
Player::Player()//delegating constructors
    :Player{"none",0,0}{
        cout << "no args constructor " << endl;
    }
Player::Player(std::string name_val)
    :Player{name_val,0,0} {
        cout << "one arg constructor" << endl;
    }
Player::Player(std::string name_val,int health_val,int xp_val)
    :name{name_val},health{health_val},xp{xp_val}{

    }
int main (){
    Player empty;
    Player frank{"Frank"};
    Player divyanshu{"Divyanshu",100,100};
return 0;
}
*/

#include<iostream>
using namespace std;

class Player
{
    private:
    std::string name{"XXX"};
    int health;
    int xp;

    public:
    // constructor parameters and default value
    Player(std::string name_val = "none" ,int health_val = 0 ,int xp_val = 0 );
};

Player::Player(std::string name_val,int health_val,int xp_val)
    :name{name_val},health{health_val},xp{xp_val}{

    }
int main (){
    Player empty;
    Player frank{"Frank"};
    Player divyanshu{"Divyanshu",100,100};
return 0;
}