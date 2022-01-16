import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Forms/Form";
import {useState} from "react";
import FormRemove from "./components/Forms/FormRemove";

function App() {
    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        setTrigger(data);
        // console.log(data);
    }
    return (
        <div className="App">
            <Form update={update}/>
            <FormRemove update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
}

export default App;
