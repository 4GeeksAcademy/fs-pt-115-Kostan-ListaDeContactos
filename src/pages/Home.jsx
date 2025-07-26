import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { editarContacto, getContacts, eliminarContacto } from "../services/servicesAPI.js";
import { Link } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Lista de contactos</h1>
			<div className="container">
				{
					store.contacts.map((contact)  => (
						<div className="card p-4 mb-3 mx-3 bg-light" key={contact.id}>
							<div className="row align-items-center">
								<div className="col-auto">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebOrnezuByjSHUpoWxP-0BzUfUGJuz6MTig&s" alt="Foto de perfil" className="rounded-circle" width="100" height="100" />
								</div>
								<div className="col">
									<h5 className="mb-1">{contact.name}</h5>
									<p className="mb-1"><i className="fa-solid fa-location-dot me-3"></i>{contact.address}</p>
									<p className="mb-1"><i className="fa-solid fa-phone me-3"></i>{contact.phone}</p>
									<p className="mb-0"><i className="fa-solid fa-envelope me-3"></i>{contact.email}</p>
								</div>
								<div className="col-auto d-flex flex-column align-items-center">
									<Link to={`/edit/${contact.id}`}>
										<button className="btn btn-link text-primary p-0 mb-2" onClick={() => editarContacto(dispatch, contact.id, contact)}>
											<i className="fa-solid fa-pencil"></i>
										</button>
									</Link>
									<button className="btn btn-link text-danger p-0" onClick={() => eliminarContacto(dispatch, contact.id)}>
										<i className="fa-solid fa-trash-can"></i>
									</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};