import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: "", username: "", email: ""})

    const formInfo = (e) => {
        const eData = {...form, [e.target.name]: e.target.value}
        setForm({...setForm, ...eData})
        // getFilter(eData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getFilter(form)
    }
    return (
        <div>
            <form>
                <label>Name:<input type="text" name={"name"} value={form.name} onChange={formInfo}/></label>
                <label>Username:<input type="text" name={"username"} value={form.username} onChange={formInfo}/></label>
                <label>Email:<input type="text" name={"email"} value={form.email} onChange={formInfo}/></label>
                <button onClick={onSubmit}>Find</button>
            </form>
        </div>
    );
};

export default Form;