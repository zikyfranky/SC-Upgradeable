// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract UBox is Initializable, UUPSUpgradeable {
    uint256 internal value;

    event ValueChanged(uint256 newValue);

    function initialize(uint256 newValue) public initializer {
        __UUPSUpgradeable_init();
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256 _value) {
        _value = value;
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        virtual
        override
    {}
}
