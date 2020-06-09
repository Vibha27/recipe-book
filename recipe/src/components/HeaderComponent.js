import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody ,Row,Col} from 'reactstrap';
import firebase,{firebaseui} from '../firebase/config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { LocalForm } from 'react-redux-form';
import {Link} from 'react-router-dom';


class Header  extends Component {

  constructor(props) {
    super(props) ;

    this.state = {
      isNavOpen: false,
      isModalOpen : false,
      isLoggedIn :false,
      showUserName : false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  
  toggleNav () {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      showUserName : !this.state.showUserName
    })
  }

  toggleModal() {
    this.setState({
    isModalOpen: !this.state.isModalOpen

    })
  }

  handleSubmit(values) {
    this.toggleModal();
  }

  // Listen to the firebase auth state and set local state
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isLoggedIn : !!user })
    );
  }

  // Make sure we unregister firebase observer when the component unmounts
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {

    return (
      <div  style={{ fontWeight : 'bold',backgroundColor : '#E4C8D2'}}>
        <Navbar light expand="md">
          <div className="container">
            <NavbarBrand href="/">
            <img src="images/food-logo.png" height="50" width="50" alt="Food-lover" />Food Lovers</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen && this.state.showUserName} navbar>
            <Nav className="mr-auto" navbar>

                <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret>
                        Recipe
                    </DropdownToggle>
                    <DropdownMenu right style={{ backgroundColor : '#E4C8D2 '}}>
                          <DropdownItem>
                              <Link to='/veg'>Veg recipe</Link>
                          </DropdownItem>
                          <DropdownItem>
                              <Link to='/nonveg'>Non-Veg recipe</Link>
                          </DropdownItem>
                          <DropdownItem>
                              <Link to="/dessert">Desert</Link>
                          </DropdownItem>
                          <DropdownItem>
                              <Link to="drink">Drinks</Link>
                          </DropdownItem>  
                    </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                <NavLink href="/addrecipe">Add Recipe</NavLink>
                </NavItem>
            </Nav>
            <Nav right navbar>
              {/* When logged in */}
              {this.state.isLoggedIn ? (
                  <>
                        <UncontrolledDropdown nav inNavbar>

                          <DropdownToggle nav caret>
                              {!this.state.showUserName ? (
                                  <button className="btn btn-lg rounded-circle btn-primary font-weight-bolder 20px">{firebase.auth().currentUser.displayName.substring(0,1)}</button>     
                              ) : (
                                <span>{firebase.auth().currentUser.displayName}</span>
                              )}
                          </DropdownToggle>

                          <DropdownMenu right>
                                <DropdownItem onClick={() => firebase.auth().signOut()}>
                                    Sign Out
                                </DropdownItem>
                                  
                          </DropdownMenu>

                      </UncontrolledDropdown>
                </>
              ) : (
                <Button type="submit" outline className="col-xs-6 font-weight-bold" 
                onClick={this.toggleModal}>Login</Button>
              
              )}
              
            </Nav>
            </Collapse>
        </div>
      </Navbar>

      {/* form */}
      <Modal className="col-12 col-md-9" 
      isOpen={this.state.isModalOpen}
      toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values)=> this.handleSubmit(values)} >
                
            <Row className="form-group">
              <Col xs={12}>
                {/*Sign in buttons  */}
                {!this.state.isLoggedIn ? (
                    <StyledFirebaseAuth uiConfig={firebaseui} firebaseAuth={firebase.auth()} />                
                ) : (
                    <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p> 
                )
              }
              </Col>
            </Row>
  
          </LocalForm>
        </ModalBody>
      </Modal>

      
      </div>

      
    )
  }
  
}


export default Header;