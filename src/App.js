import Blue from "./components/User/User";
import Red from './components/User2/User2';

function App() {
    const user = {
        name:'Anna',
        age:19
    }
    function hi() {
        alert("Hello Beks")
    }
    return (
        <div className="App">
            <Blue name={user.name} age={user.age}/>
            <Red name={user.name} age={user.age}/>
            <button onClick={hi}> click</button>
        </div>
    );
}

export default App;