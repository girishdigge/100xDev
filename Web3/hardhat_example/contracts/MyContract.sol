pragma solidity 0.8.28;

contract MyContract{
    string value;

    constructor(){
        value="Let's Goooooooo!";
    }

    function get() public view returns(string memory){
        return value;
    }

    function set(string memory _value) public {
        value=_value;
    }
}