pragma solidity ^0.8;

contract Payables  {

    address public charity;

    mapping(address=>uint) public donations;

    constructor() {
        charity = msg.sender;
    }

    function deposit() payable public {
        donations[msg.sender] = msg.value;
    }

    function withdraw() public {
        payable(charity).transfer(address(this).balance);
    }

}