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


export const crearContacto = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/kostan/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": "string",
            "phone": "",
            "email": "",
            "address": ""
        })
    })
    const data = await response.json()
    getContacts(dispatch)
}