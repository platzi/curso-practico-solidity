pragma solidity ^0.8;

contract Payables  {

    address public charity;

    mapping(address=>uint) public balanceOf;

    constructor() {
        charity = msg.sender;
    }

    function deposit() payable public {
        balanceOf[msg.sender] = msg.value;
    }

    function withdraw() public {
        require(msg.sender==charity,"Not the charity");
        payable(charity).transfer(address(this).balance);
    }

}