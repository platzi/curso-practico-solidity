import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WalletConnectProvider from '@walletconnect/web3-provider';
import abi from './abi';

function LiberarPago() {

    const liberacionArbitral = async () => {
        const provider = new WalletConnectProvider({
            rpc: {
              44787: "https://alfajores-forno.celo-testnet.org",
              42220: "https://forno.celo.org",
            },
          })
        await provider.enable()
        const web3 = new Web3(provider)
        let kit = newKitFromWeb3(web3)
        kit.defaultAccount = provider.accounts[0]
        let contract = new kit.connection.web3.eth.Contract(abi, "0xF00a27a8dcB02c09E19a9b389b5382312Ee686Fa")
          const transact= await contract.methods.pagarPorArbitro().send({
              from: kit.defaultAccount
          })
        console.log(transact)
        alert("Transaccion Aprobada")
    }

    const liberacionArbitralContractKitHandler = async ()=>{
        if(window.celo) {
            await window.celo.enable()
          }
          const web3 = new Web3(window.celo)
          let kit = newKitFromWeb3(web3)
          const accounts = await kit.web3.eth.getAccounts()
          kit.defaultAccount = accounts[0]
          
          let contract = new kit.connection.web3.eth.Contract(abi, "0xF00a27a8dcB02c09E19a9b389b5382312Ee686Fa")
          const transact= await contract.methods.pagarPorArbitro().send({
              from: kit.defaultAccount
          })
          console.log(transact)
      }
      


    return (
        <Container>
            <Row>
                <Col>
                    <h1>Liberacion del Pago</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col>
          <Button variant="primary" type="submit">
          Comprador confirma OK
            </Button>
                </Col>
            </Row>
            <Row>
                <Col>
          <Button variant="success" type="submit" onClick={liberacionArbitral}>
          Arbitro Libera Pago
            </Button>
                </Col>
            </Row>
        </Container>
    )

}

export default LiberarPago