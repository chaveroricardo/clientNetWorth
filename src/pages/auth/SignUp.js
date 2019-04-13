import React, { Component } from 'react';
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

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
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
        <h1 className="h2">Empecemos</h1>
        <p className="lead">
        Vamos a crear un usuario para que regreses cuando quieras
        </p>
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
              <FormGroup>
                <Label>Email</Label>
                <Input
                  bsSize="lg"
                  type="email"
                  name="username"
                  placeholder="Ingresa tu correo"
                  value={this.state.username}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Contraseña</Label>
                <Input
                  bsSize="lg"
                  type="password"
                  name="password"
                  placeholder="Ingresa su contraseña"
                  value={this.state.password}
                  onChange={ e => this.handleChange(e)} 
                />
              </FormGroup>
              <small>
                <Link to={"/auth/sign-in"}>¿Ya tienes una cuenta?</Link>
              </small>
              <div className="text-center mt-3">
                  <Button type="submit" value="SignUp" color="primary" size="lg">
                    Inscribirme
                  </Button> 
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
    )
  }
}



export default SignUp;
