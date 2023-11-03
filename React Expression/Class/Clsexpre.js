import React from "react";
class Clsexpre extends React.Component{
    msg="React Expression"
    obj={
        id:101,
        name:"Mounika",
        comany:"Accenture"
    }
    render(){
        return <div>
            <h1>Class component</h1>
            <hr/>
            <div className="card " >
                <div className="card-head">
                    {JSON.stringify(this.obj)}
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">{this.msg}</li>
                        <li className="list-group-item">{this.obj.id}</li>
                        <li className="list-group-item">{this.obj.name}</li>
                        <li className="list-group-item">{this.obj.comany}</li>
                    </ul>
                </div>

            </div>
        </div>
    }

}
export default Clsexpre