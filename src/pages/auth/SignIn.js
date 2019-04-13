import React, { Component} from "react";
import { Link } from "react-router-dom";
import AuthService from '../../components/auth/auth-service';


import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import logo from "../../assets/img/logonwc.png";

class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
  <React.Fragment>
    <div className="text-center mt-4">
      <h2>Bienvenido</h2>
      <p className="lead">Introduce tus datos para continuar</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <div className="text-center">
          <Link to={"/"}>
           <img
              src={logo}
              alt="Net Worth"
              className="img-fluid rounded-circle"
              width="132"
              height="132"
            />
            </Link>
          </div>
          <Form onSubmit={this.handleFormSubmit}> 
            <FormGroup >
              <Label>Email</Label>
              <Input
                value={this.state.username} 
                onChange={ e => this.handleChange(e)}
                bsSize="lg"
                type="email"
                name="username"
                placeholder="Ingresa tu correo"
              />
            </FormGroup>
            <FormGroup>
              <Label>Contraseña</Label>
              <Input
                value={this.state.password}
                onChange={ e => this.handleChange(e)}
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
              <small>
                <Link to="/auth/sign-up">¿No tienes una cuenta?</Link>
              </small>
            </FormGroup>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button type="submit" value="SignIn" color="primary" size="lg">
                  Entrar
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
)
  }
}

export default SignIn;
