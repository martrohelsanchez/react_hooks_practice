import React, { useState } from "react";
import {createStore} from "redux";
import { useSelector, Provider, useDispatch} from "react-redux";

function addTodo() {
    return {
        type: "addTodo"
    }
}

let initialState = ["one", "two", "three", "four"];

function reducer(state = initialState, action) {
    switch (action.type) {
        case "addTodo":
            return [...state, "zaira"];
        default:
            return state; 
    }
}

const store = createStore(reducer);

//-----------------------------------------------------

function DisplayOption() {
    const option = useSelector((state) => state);

    return (
      <div>
        <ul>
          {option.map((val) => {
            return <li key={val.id}>{val}</li>;
          })}
        </ul>
      </div>
    );
}

//----------------------------------------------------

function Button() {
    const dispatch = useDispatch();
    console.log(useDispatch());

    return (
        <div>
          <button onClick={() => dispatch(addTodo())}>add</button>
        </div>
    );
}

//-------------------------------------------

function build() {
    return (
        <Provider store={store}>
            <DisplayOption />
            <Button />
        </Provider>
    )
}
export default build;