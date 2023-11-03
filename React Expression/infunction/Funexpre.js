function Funexpre(){
    let msg='React expression'
    let emp={id:101,name:"Mounika", loc:"bng", sal:"50000"}
    return <div>
        <h1>Function Component</h1>
        <pre>{JSON.stringify(emp)}</pre>
        <p>id:{emp.id}</p>
        <p>name:{emp.name}</p>
        <p>{msg}</p>
    </div>
}
export default Funexpre