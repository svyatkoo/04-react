import React, {useState} from 'react';

import "./formFilter.css";

const FormFilter = ({getFiltered}) => {
    const [form, setForm] = useState({id:"", model:"", price:"", year:""})

    const formData = (e) => {
        const targetData = {...form, [e.target.name]:e.target.value}
        setForm({...setForm, ...targetData})
        getFiltered(targetData)
    }

    return (
        <div className="formFilterWrap">
            <h1>Filter</h1>
            <form>
                <label>Id:<input type="text" name={"id"} value={form.id} onChange={formData}/></label>
                <label>Model:<input type="text" name={"model"} value={form.model} onChange={formData}/></label>
                <label>Price:<input type="text" name={"price"} value={form.price} onChange={formData}/></label>
                <label>Year:<input type="text" name={"year"} value={form.year} onChange={formData}/></label>
            </form>
        </div>
    );
};

export default FormFilter;