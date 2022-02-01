
contract Ejemplos  {

    uint tipoDatoNumeroEntero;
    bytes32 tipoDatosBytes;
    string tipoDatoString;
    address tipoDatoAddress;
    bool tipoDatoBooleano;
    uint[] arregloEnteros[];

    constructor() {
        //se ejecuta al instanciar el contrato
    }

    function normal() public {
        //modifican el estado de la cadena
    }

    function soloLectura() view public returns(bool) {
        //solo se lee el estado
        return true;
    }

    function soloParaCalculos() pure public {
        //no modifica ni lee el estado
    }

}
