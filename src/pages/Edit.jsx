import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearContacto, editarContacto } from "../services/servicesAPI";
import { Link, useParams } from "react-router-dom";
import { use } from "react";


export const Edit = () => {
    const { store, dispatch } = useGlobalReducer();


    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    
    const {id} = useParams();
        console.log(id);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        
    };

    const onSubmit = () => {
        editarContacto(dispatch, id, form);
        
    };


    useEffect(() => {
        const contacto = store.contacts.find(contact => contact.id == id);
        if (contacto) setForm(contacto);
    }, [store.contacts, id]);

    return (
        <>
            <h1 className="d-flex justify-content-center">Edita el contacto</h1>
            <div className="d-flex justify-content-center container" key={id}>
                <div className="row g-3 col-6" >
                    <div className="col-12">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} min="0" pattern="[0-9]*" inputMode="numeric" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <Link to="/">
            <button className="btn btn-primary d-flex mx-auto mt-3" onClick={onSubmit}>Actualizar contacto</button>
            </Link>
        </>
    );
}