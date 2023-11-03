import React from "react";
import Msg from "./Msg";
class App extends React.Component{
    render(){
        return <div>
            <h1>App Component </h1>
            <hr></hr>
            <h2>Class Component</h2>
            <Msg/>
        </div>
    }
}
export default App