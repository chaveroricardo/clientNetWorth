import React from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { enableClassicTheme } from "../../redux/actions/themeActions";

import { history } from '../../redux/store/history';


import {
  Button,
  Col,
  Container,
  Row
} from "reactstrap";



import logowebnwc from "../../assets/img/photos/logoweb.png";

const Intro = () => (
  <section className="landing-intro pt-6 pt-xl-10">
    <Container>
      <Row>
        <Col md="12" lg="9" xl="11" className="mx-auto">
          <Row>
            <Col xl="5">

              <h1 className="text-white my-4">
                Toma el control de tus finanzas, empieza por hacer un análisis de tu situación financiera.
              </h1>

              <p className="text-muted">
                Con nuestra calculadora de salud financiera, podrás llevar en tan sólo 8 preguntas, tener un panorama sobre qué hacer con tu dinero. Uno de nuestros asesores te podrá indicar el camino correcto.
              </p>

              <div className="my-4">
                <Link to="/auth/sign-in" >
                  <Button color="light" size="lg" className="mr-2">
                    Entrar
                  </Button>
                </Link>
                <Link to="/auth/sign-up" >
                <Button
                  color="light"
                  size="lg"
                  outline
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrase
                </Button>
                </Link>
              </div>

              <div className="my-5">
                <div className="d-inline-block mr-3">
                  <h2 className="text-white">+3000</h2>
                  <span className="text-muted">Inversionistas</span>
                </div>
                <div className="d-inline-block mr-3">
                  <h2 className="text-white">+35 años</h2>
                  <span className="text-muted">Experiencia</span>
                </div>
              </div>

            
            </Col>
            <Col xl="6" className="ml-auto d-none d-xl-block">
              <div className="landing-intro-img">
                <img
                  src={logowebnwc}
                  className="landing-intro-img-analytics img-fluid"
                  alt="Dashboard Analytics"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br/>
      <br/>
    </Container>
  </section>
);


const Footer = () => (
  <section className="py-5">
    <Container className="text-center">
    </Container>
  </section>
);

class Landing extends React.Component {
    componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableClassicTheme());
  }

  render() {
    return (
      <React.Fragment>
        <Intro />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect()(Landing);
