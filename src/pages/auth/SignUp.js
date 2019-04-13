import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import AuthService from '../../components/auth/auth-service';
import { userActions } from '../../redux/actions/user.actions';
import { connect } from 'react-redux';

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


class SignUp extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { username: '', password: '' };
  //   this.service = new AuthService();
  // }

  // // handleChange() and handleSubmit() will be added here

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const username = this.state.username;
  //   const password = this.state.password;
  
  //   this.service.signup(username, password)
  //   .then( response => {
  //       this.setState({
  //           username: "", 
  //           password: "",
  //       });
  //       // this.props.getUser(response)
  //   })
  //   .catch( error => console.log(error) )
  // }
  
  // handleChange = (event) => {  
  //   const {name, value} = event.target;
  //   this.setState({[name]: value});
  // }

  constructor(props) {
    super(props);

    this.state = {
        user: {
            username: '',
            password: ''
        },
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.username && user.password) {
        dispatch(userActions.register(user));
    }
}
    render(){
      const { registering  } = this.props;
      const { user, submitted } = this.state;
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                <Label>Email</Label>
                <Input
                  bsSize="lg"
                  type="email"
                  name="username"
                  placeholder="Ingresa tu correo"
                  value={user.name}
                  onChange={this.handleChange}
                />
                {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                }
              </FormGroup>
              <FormGroup className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                <Label>Contraseña</Label>
                <Input
                  bsSize="lg"
                  type="password"
                  name="password"
                  placeholder="Ingresa su contraseña"
                  value={user.password}
                  onChange={this.handleChange} 
                />
                {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
              </FormGroup>
              <small>
                <Link to={"/auth/sign-in"}>¿Ya tienes una cuenta?</Link>
              </small>
              <div className="text-center mt-3">
                  <Button type="submit" value="SignUp" color="primary" size="lg">
                    Inscribirme
                  </Button> 
                  {registering}
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
  };
}

const connectedSignUp = connect(mapStateToProps)(SignUp);
export { connectedSignUp as SignUp };
