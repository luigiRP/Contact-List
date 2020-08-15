import React from "react";
import PropTypes from "prop-types";

export default function Contact(props) {
	return (
		<div>
			<div className="row p-3 justify-content-between align-items-center border-bottom border-secondary">
				<div className="col-6 d-flex">
					<img src="https://www.luisrp.com/static/media/perfil.440ee5d9.jpg" className="col-4" />
					<div className="col-6 p-0">
						<h5 className="mx-3">{props.name}</h5>
						<div className="d-flex align-items-baseline">
							<i className="fas fa-map-marker-alt text-secondary mx-3" />
							<span className="text-secondary">{props.address}</span>
						</div>
						<div className="d-flex align-items-baseline">
							<i className="fas fa-phone text-secondary mx-3" />
							<span className="text-secondary">{props.number}</span>
						</div>
						<div className="d-flex align-items-baseline">
							<i className="far fa-envelope text-secondary mx-3" />
							<span className="text-secondary">{props.email}</span>
						</div>
					</div>
				</div>
				<div className="col-6 d-flex justify-content-center">
					<i className="fas fa-pencil-alt mx-5 font" />
					<i className="fas fa-trash mx-5 text-danger font" />
				</div>
			</div>
		</div>
	);
}

Contact.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	address: PropTypes.string,
	email: PropTypes.string
};
