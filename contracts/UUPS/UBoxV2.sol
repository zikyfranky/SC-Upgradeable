// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./UBox.sol";

contract UBoxV2 is UBox, OwnableUpgradeable {
    function initialize() public {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function increment() public onlyOwner {
        uint256 newValue = value + 1;
        value = newValue;
        emit ValueChanged(newValue);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}
