#ifndef MOVIES_H
#define MOVIES_H
#include<vector>
#include<string>
#include"Movies.h"
#pragma once

class Movies
{
    std::string movie_name;
    std::string movie_rating;
    int watchcont;
public:
    Movies();
    ~Movies();
    bool add_movie(std::string name,std::string rating, int watched);
    bool increment_watched(std::string name);
    void display() const;
    std::vector<std::string> movies;
    std::string get_name() const;
    std::string get_name() const{
        return movie_name;
    }
    // static int count_val(){return count;}
    void display_all_detail() const{
        
        std::cout<<"movie name ="<<movie_name<<std::endl;
        std::cout<<"movie rating ="<<movie_rating<<std::endl;
        std::cout<<"movie watch count ="<<watchcont<<std::endl;
    }
    void increase_watchcount(){
        watchcont++;
    }
};
#endif