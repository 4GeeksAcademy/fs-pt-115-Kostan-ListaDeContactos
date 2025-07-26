export const getContacts = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/kostan/contacts")
    if (!response.ok) {
        crearAgenda()
        return
    }
    const data = await response.json()
    console.log(data);
    dispatch({ type: `set_contacts`, payload: data.contacts })
}

export const crearAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/kostan", {
        method: "POST",
    })

}


export const crearContacto = async (dispatch, contacto) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/kostan/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contacto)
    });
    await response.json();
    getContacts(dispatch);
    
    
}

export const eliminarContacto = async (dispatch, id) => {
    const confirmacion = window.confirm("¿Seguro que quieres eliminar este contacto?");
    if (!confirmacion) return;

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/kostan/contacts/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        getContacts(dispatch);
        alert("Contacto eliminado correctamente");
    } else {
        console.error("Error al eliminar el contacto");
    }
}

export const editarContacto = async (dispatch, id, contacto) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/kostan/contacts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contacto)
    });
    if (response.ok) {
        await response.json();
        getContacts(dispatch);
    } else {
        console.error("Error al editar el contacto");
    }
}