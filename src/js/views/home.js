import React, { useContext } from "react";
import Contact from "../component/contact.js";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container border border-secondary">
			{store.contacts.map((contact, index) => {
				return (
					<Contact
						contactId={contact.id}
						img="https://www.luisrp.com/static/media/perfil.440ee5d9.jpg"
						name={contact.full_name}
						address={contact.address}
						number={contact.phone}
						email={contact.email}
						key={index}
					/>
				);
			})}
		</div>
	);
};
