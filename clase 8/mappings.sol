pragma solidity ^0.8;

contract Mappings  {

    mapping(uint=>string) public records; 


    function addRecord(uint _index,string memory _text) public {
        records[_index]=_text;
    }

}