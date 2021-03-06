import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">StaffNow</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="collapse navbar-collapse" navbar>
							<NavItem>
								<NavLink href="/account"> Accounts </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/project"> Projects </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/staffing_request"> Staffing Request </NavLink>
							</NavItem>
						</Nav>
						<Nav className="ml-auto">
							<NavItem>
								<NavLink href="">Hello Priya</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="container" />
			</div>
		);
	}
}
