import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
class App extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">Bootstrap</a>
            </nav>
            <hr/>
            <div >
                <ul className="list-group">
                    <li className="list-group-item"><Header/></li>
                    <li className="list-group-item"><Body/></li>
                    <li className="list-group-item"><Footer/></li>
                </ul>
            </div>
        </div>
    }
}
export default App