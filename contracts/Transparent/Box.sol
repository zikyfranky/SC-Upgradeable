// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract Box {
    uint256 private value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256 _value) {
        _value = value;
    }
}
