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

function DemoCurso() {

const verSaldoClickHandler = async ()=>{
  const web3 = new Web3("https://alfajores-forno.celo-testnet.org")
  const kit = newKitFromWeb3(web3);

  let accounts = await kit.web3.eth.getAccounts()
  kit.defaultAccount = accounts[0]
  let totalBalance = await kit.getTotalBalance("0xE8AD4CeE8aF64eeB16DE58Fc40A9fb2376091BCe")
  console.log(totalBalance['CELO']['c'][0])
  alert(totalBalance['CELO']['c'][0])
}

const transferirFondosHandler = async ()=>{
  if(window.celo) {
    await window.celo.enable()
  }
  const web3 = new Web3(window.celo)
  let kit = newKitFromWeb3(web3)
  const accounts = await kit.web3.eth.getAccounts()
  kit.defaultAccount = accounts[0]
  
  const celo = await kit._web3Contracts.getGoldToken()
  const result= await celo.methods.transfer("0x97f91b35A134CFA304420E9E8206E550DdA53374",kit.web3.utils.toWei('1', 'ether')).send({
    "from":accounts[0]
  })
  console.log(result)
}

const walletConnectHandler = async() => {  
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
  let amount = kit.web3.utils.toWei('0.001', 'ether')
  const stabletoken = await kit.contracts.getStableToken()
  const tx=await stabletoken.transfer("0x97f91b35A134CFA304420E9E8206E550DdA53374", amount).send()
  const receipt= await tx.waitReceipt()
  console.log(receipt)
}

  return (
    <Container>
        <Row  className="mt-4 mb-4">
          <Col>
            <Button variant="primary" onClick={verSaldoClickHandler}>Ver Saldo</Button>
          </Col>
        </Row>
        <Row  className="mt-4 mb-4">
          <Col>
            <Button variant="primary" onClick={transferirFondosHandler}>Dame un tip de tu wallet de navegador</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={walletConnectHandler}>Dame un tip de tu Valora Wallet</Button>
          </Col>
        </Row>
    </Container>

    )

  }

export default DemoCurso;