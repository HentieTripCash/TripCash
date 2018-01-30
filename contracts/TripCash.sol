pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/BasicToken.sol';

contract TripCash is BasicToken {
  string public name = "TRIPCASH";
  string public symbol = "TCH";
  uint8 public decimals = 18;
}