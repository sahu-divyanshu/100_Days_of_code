
#include<iostream>
#include "Movies.h"
#include<string>
#include<vector>


Movies::Movies()
{
// comstructor
}

Movies::~Movies()
{
// destructor 
}

bool Movies::add_movie(std::string name,std::string rating,int watched){
    for (auto movie :movies){
        Movies obj;
    if(obj.get_name()==name)
        return false;
    }
    std::string temp {name,rating};
    movies.push_back(temp);
    return true;
}
bool Movies::increment_watched(std::string name){
    for(auto movie: movies){
        Movies obj;
        if(obj.get_name()==name){
            obj.increase_watchcount();
            return true;
        }
    } return false;
}
void Movies::display() const{
    if (movies.size()==0) {
        std::cout << "no movies" << std::endl;
    }
    else {
        Movies obj;
        for ( auto movie:movies)
        obj.display_all_detail();
    }
}

