// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/**
 * @title SimpleStorage
 * @dev Store & retrieve value in a variable
 */
contract SimpleStorage {

    string value = "Simple Storage Default";

    /**
     * @dev Store value in variable
     * @param val value to store
     */
    function store(string memory val) public {
        value = val;
    }

    /**
     * @dev Return value 
     * @return value of 'value'
     */
    function retrieve() public view returns (string memory){
        return value;
    }
}