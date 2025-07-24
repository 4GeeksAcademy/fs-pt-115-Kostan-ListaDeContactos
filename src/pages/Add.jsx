import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearContacto } from "../services/servicesAPI";

export const Add = () => {

    const { store, dispatch } = useGlobalReducer()
    const onSubmit = () => {
        crearContacto(dispatch)
    }
    return (
        <>
            <h1 className="d-flex justify-content-center">Crea un nuevo contacto </h1>
            <div className="d-flex justify-content-center container">
                <div className="row g-3 col-6">
                    <div className=" col-12 ">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" />
                    </div>

                    <div className=" col-12 ">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            name="phone"
                            min="0"
                            pattern="[0-9]*"inputMode="numeric"
                        />
                    </div>

                    <div className=" col-12 ">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>

                    <div className=" col-12 ">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" name="address" />
                    </div>
                </div>
            </div>
        </>
    );
}