pragma solidity ^0.8;

contract Direcciones  {

    address public creador;

    constructor() {
        creador = msg.sender;
    }

}