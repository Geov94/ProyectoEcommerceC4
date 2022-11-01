import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import './login.css';

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        usuario:'',
        pass:''
    };
  }
iniciarSesion(){
    alert('iniciaste sesion ,saludos')

}
  render() {
    return (
      <Container id="login-container" >
        <Row>
          <Col sm="12" xs="12" md={{span:4,offset:4}} lg={{span:4,offset:4}} xl={{span:4,offset:4}}>
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label  >Usuario</Form.Label>
                  <Form.Control onChange={(e)=> this.setState({usuario: e.target.value})} type="text" placeholder="Enter email" />
                  {
                    this.state.usuario
                  }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control onChange={(e)=> this.setState({pass: e.target.value})} type="password" placeholder="Password" />
                  {
                    this.state.pass
                  }
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                 
                  onClick={()=>{
                    this.iniciarSesion();

                  }}
                >
                  Iniciar Sesion
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
      
    );
  }
}