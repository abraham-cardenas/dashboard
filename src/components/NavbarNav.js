
import React from 'react';
import Regi from '../imagenes/DM&.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class NavbarNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

          <NavbarBrand href="/"> <img src={Regi} alt="User-login" class='col-md-5'/></NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                  Abraham Cardenas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Mi perfil
                  </DropdownItem>
                  <DropdownItem>
                    Configuraciones
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}