pragma solidity ^0.8;


contract Proyecto {

    address public comprador;
    address public vendedor;

    address public arbitro;

    bool public depositoListo;
    bool public compradorOK;
    bool public pagoListo;

    uint public montoPago;
    
    constructor(address _comprador, address _vendedor, uint _monto, address _arbitro) {
    }

    //deposita el comprador
    function depositarPago() public {} 

    function compradorConfirmaOK() public {
    }

    //retira el vendedor
    function retirarPago() public {}

    //si el vendedor no entrega el producto, interviene el arbitro
    function cancelarPorArbitro() public {}


}