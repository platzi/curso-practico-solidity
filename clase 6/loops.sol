pragma solidity ^0.8;

contract Loops  {

    uint[] datos;

    function repetir(uint numero) public {
        for(uint i=0; i<=numero;i++) {
            datos.push(i);
        }
    }


}