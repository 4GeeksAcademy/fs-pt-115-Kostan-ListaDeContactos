import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearContacto } from "../services/servicesAPI";
import { useNavigate } from "react-router-dom";

export const Add = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (form.name && form.phone && form.email && form.address) {
            crearContacto(dispatch, form);
            setForm({
                name: "",
                phone: "",
                email: "",
                address: ""
            });
            navigate("/");
        } else {
            alert("Todos los campos deben ser rellenados.");
        }
    };

    return (
        <>
            <h1 className="d-flex justify-content-center">Crea un nuevo contacto</h1>
            <div className="d-flex justify-content-center container">
                <form onSubmit={handleSubmit} className="row g-3 col-6">
                    <div className="col-12">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} min="0" pattern="[0-9]*" inputMode="numeric" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} required />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-3">Agregar contacto</button>
                    </div>
                </form>
            </div>
        </>
    );
};
