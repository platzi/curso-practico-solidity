pragma solidity ^0.5;

contract HolaMundo {

    string frase;

    constructor() public {
        frase = "Hola Mundo";
    }

    function getFrase() view public returns(string memory _frase) {
        return frase;
    }

}