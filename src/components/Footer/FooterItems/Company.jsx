import React from 'react';
import '../footer.css';

export const Company = () => {
	return(
		<>
			<section className="ft--item_one">
				<h1 className="ft--h1">Company</h1>
				<ul className="ft--ul">
					<li>About Us</li>
					<li>Careers</li>
					<li className="ft--l">Legal</li>
				</ul>
				<h1 className="ft--h1 contact">Contact us</h1>
				<ul className="ft--ul">
					<li>info@comic-con.com</li>
				</ul>
			</section>
		</>
	);
};