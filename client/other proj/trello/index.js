import React from "react";
import Board from "./containers/Board/Board";
import NavBar from "./containers/NavBar/NavBar";
import css from "./index.css";

function Trello() {
 return (
     <div>
        <NavBar />
        <Board />
     </div>
 )
}

export default Trello