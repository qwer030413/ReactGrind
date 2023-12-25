import "./index.css";
import { useState } from 'react';




//function(method) that I can use!
//takes in a variable named value and inserts it in the button and returns it
//if wanna use it, <Square value = "1">
// function Square({value}){
    
//     //handling clicks
//     function handleClick(){
//         console.log("clicked!");
//     }
    
//     return <button className = "square" onClick = {handleClick}>{value}</button>;
// }

//takes in value and onSquareClick
function Square({value, onSquareClick}){
    
    //returns a button named square and triggers onSquareClick if clicked
    return (
        <button className="square" onClick={onSquareClick}>
          {value}
        </button>
      );
}

//export makes it so that this function is accessable outside of this file
//default tells other files using this code that this is the main function of my file
//the name Square is arbitary and it could be anything that I want
//export default is like main function
export default function Board() {
    //useState makes components remember things
    //value stores the value and setValue is a function that can be used to change the value
    //the null is the inital value of the state variable, which means values initial value is null
    // const [value, setValue] = useState(null);

    //each time a player makes a move, xIsNext, which is a boolean will be flipped true of false
    //to determine which player goes next
    const [xIsNext, setXIsNext] = useState(true);
    //array of size 9 with initial value null
    const [squares, setSquares] = useState(Array(9).fill(null));

    var xo = 1;
    //handling clicks, takes parameter i
    function handleClick(i){
        //makes a copy of the squares array named next squares with the slice method
        const nextSquares = squares.slice();
        //using setValue we created earlier
        //setSquares('X');

        //sets the value of the array to X in the given index
        // nextSquares[i] = "X";
        // setSquares(nextSquares);



        //if the squares at index i is not null, that means it has already been clicked
        //we return it so that the function ends and the player cant click the same square twice
        if(squares[i] || calculateWinner(squares))
        {
            return;
        }
        //if alternating X and O, we will flip xIsNext everytime the function runs
        if(xIsNext)
        {
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }
        
        //setting the squares array equal to the nextSquares array
        setSquares(nextSquares);
        //flip the boolean value of xIsNext by using the setXIsNext
        setXIsNext(!xIsNext);
        
    }
    //X,O or null
    const winner = calculateWinner(squares);
    let status;
    //if winner is not null, show winner
    if(winner){
        status = 'Winner ' + winner;   
    }
    //if there is no winner, tell the player who the next person is by printing out xisNext X or O
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
      }
    //we can return many things by doing this
    return (
        <>
        {/* the status, winner or the next player */}
        <div className="status">{status}
        <button className="btn">reset</button>
        </div>
        <div className="row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
                

        </>

    );
    
    
    
}


//returns X, O or null depending on the winner
//takes in squres
function calculateWinner(squares) {
    let status;
    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }