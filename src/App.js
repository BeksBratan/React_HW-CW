import Blue from "./components/User/User";
import Red from './components/User2/User2';

function App() {
    const user = {
        name:'Anna',
        age:19
    }
    return (
        <div className="App">
            <Blue name={user.name} age={user.age}/>
            <Red name={user.name} age={user.age}/>
        </div>
    );
}

export default App;