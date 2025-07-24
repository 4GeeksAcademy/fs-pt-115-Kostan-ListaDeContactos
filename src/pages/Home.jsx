import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/servicesAPI.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


useEffect(() => {
	getContacts(dispatch)
}, [])

	return (
		<div className="text-center mt-5">
			<h1>Lista de contactos</h1>
			<div className="row">
				{
					store.contacts.map(contact => {
						return(
							<div className="col-12" key={contact.id}>
								<h5>Nombre: {contact.name}</h5>
								<p>Telefono: {contact.phone}</p>
								<p>Email: {contact.email}</p>
								<p>Direccion: {contact.address}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};