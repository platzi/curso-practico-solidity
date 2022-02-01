pragma solidity ^0.8;

contract Condicionales  {

    int public contador;

    constructor() {
        contador=0;
    }

    function SiONo(bool input) public {
        if(input) {
            contador+=1;
        } else{
            contador-=1;
        }

    }

}