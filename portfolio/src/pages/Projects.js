import React from "react";
import { useState } from "react";
import './pages.css';
import Card from "../components/cards/card";
import jet from '../components/cards/jet.jpg';
import weather from '../components/cards/weatherapp.jpg';
import list from '../components/cards/todolist.jpg';
import Anitext from "../components/headers/animatedText";
import pom from "../components/cards/pomodoro.jpg";
import chat from "../components/cards/chattingApp.jpg";

export default function Projects(){
    const description1 = () =>{
        return(<text>{'hello \n my name is\n chris park'}</text>);
    };
    return(
        <>
            <div className="Projects">
                <Anitext text = "Projects" class = "Projects"/>
            </div>
            
            <div className="projectcards">
                <Card image = {jet} text = {"Jet Fighter Game"} 
                description = {'2D, 2 player Jet fighter game. Both players have 5 health and are able to shoot bullets at eachother, each bullet taking away 1 health on contact'}
                used = {"Used: Java, polymorphism, inheritance, mutithreading, GUIs, github, git"}
                /> 
                
                <Card image = {weather} text = {"Weather App"} 
                description = {"A weather app that allows the user to search up any city in the world, and giving them the current weather info, and the weather information for 3 days in advance"}
                used = {"Used: Java, Android Studio, Weather API, XML"}
                />
                <Card image = {list} text = {"To-Do List"} 
                description = {"A to-do list website where you could add and delete things in your list. Users can also create accounts and log in to load their saved to-do lists"}
                used = {"Used: JavaScript, CSS, HTML, Firebase database, Firebase firestore, Github Pages"}
                />
                <Card image = {pom} text = {"Pomodoro"} 
                description = {"A pomodoro website that gives the user 3 different timers. It also contains a small to-do list under the poomodoro tab. The user is able to create accounts, Log in, and access their account history and settings."}
                used = {"Used: React, TypeScript, CSS, mySQL, Node.js, Express.js"}
                />
                <Card image = {chat} text = {"Chatting App"} 
                description = {"A chatting app that allows users to chat with each other in real time, add friends, and customize their profile for others to view."}
                used = {"Used: React, TypeScript, CSS, mySQL, Node.js, Express.js, SocketIo "}
                />
            </div>
        
        </>
        
        
    );
}