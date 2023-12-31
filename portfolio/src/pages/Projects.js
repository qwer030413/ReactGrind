import React from "react";
import { useState } from "react";
import './pages.css';
import Card from "../components/cards/card";
import jet from '../components/cards/jet.jpg';
import weather from '../components/cards/weatherapp.jpg';
import list from '../components/cards/todolist.jpg';



export default function Projects(){
    return(
        <div className="projectcards">
            <Card image = {jet} text = {"Jet Fighter Game"} description = {"blah blah"}/>
            <Card image = {list} text = {"To-Do List"} description = {"blah blah"}/>
            <Card image = {weather} text = {"Weather App"} description = {"blah blah"}/>
        </div>
        
    );
}