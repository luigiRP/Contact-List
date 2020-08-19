const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				let data = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/luigiRP`);
				let contactList = await data.json();
				setStore({ contacts: contactList });
			},
			deleteContact: id => {
				let link = "https://assets.breatheco.de/apis/fake/contact/";

				fetch(link.concat(id), {
					method: "DELETE"
				}).then(response => response.json());
			}
		}
	};
};

export default getState;
