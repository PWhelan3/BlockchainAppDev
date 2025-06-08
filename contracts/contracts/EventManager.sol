// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventManager {
    struct Event {
        address creator;
        string name;
        string location;
        uint256 timestamp;
    }

    Event[] public events;

    function createEvent(string memory name, string memory location, uint256 timestamp) public {
        events.push(Event(msg.sender, name, location, timestamp));
    }

    function getAllEvents() public view returns (Event[] memory) {
        return events;
    }
}
