import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Forms/Form";
import {useState} from "react";
import FormRemove from "./components/Forms/FormRemove";
import FormUpdate from "./components/Forms/FormUpdate";
import css from "./App.module.css";

function App() {
    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        console.log("data");
        console.log(data);
        console.log("data");

        setTrigger(data);
    }
    return (
        <div className="App">
            <div className={css.wrap}>
                <Form update={update}/>
                <FormRemove update={update}/>
                <FormUpdate update={update}/>
            </div>
            <Cars trigger={trigger}/>
        </div>
    );
}

export default App;
