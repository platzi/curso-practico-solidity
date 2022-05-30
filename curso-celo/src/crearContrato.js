import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CeloContract } from '@celo/contractkit'
import WalletConnectProvider from '@walletconnect/web3-provider';

function CrearContrato() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Crear un contrato de pago</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address del Comprador</Form.Label>
                <Form.Control type="email" placeholder="Ej: 0x0234...." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address del Vendedor</Form.Label>
              <Form.Control type="email" placeholder="Ej: 0x0234...." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Monto</Form.Label>
            <Form.Control type="email" placeholder="Ej: 40" />
          </Form.Group>
          <Button variant="primary" type="submit">
          Firma del Arbitro
            </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )

}

export default CrearContrato