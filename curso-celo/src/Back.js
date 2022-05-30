import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './demoCurso';
import Container from 'react-bootstrap/Container';
import CrearContrato from './crearContrato';
import DepositarPago from './depositarPago';
import LiberarPago from './LiberarPago';

function App() {

  return (
    <div className="App">
      <Container>
        <Demo />  
      </Container> 
      <Container> 
        <CrearContrato />  
      </Container> 
      <Container> 
        <DepositarPago />  
      </Container> 
      <Container> 
        <LiberarPago/>  
      </Container> 
    </div>
  );
}

export default App;
