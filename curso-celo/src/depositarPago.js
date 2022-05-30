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

function DepositarPago() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Vendedor Deposita Pago</h1>
                </Col>
            </Row>
            <Row>
                <Col>
          <Button variant="primary" type="submit">
          Efectuar Deposito
            </Button>
                </Col>
            </Row>
        </Container>
    )

}

export default DepositarPago