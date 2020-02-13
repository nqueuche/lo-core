pragma solidity ^0.5.0;

import "./ERC20.sol";
import "./ERC20Detailed.sol";

/**
 * @title MockToken
  This is a mock contract that make it easy to set exact amount of a token with no checks
 */
contract MockToken is ERC20, ERC20Detailed {
    uint8 public constant DECIMALS = 18;


    constructor () public ERC20Detailed("MockToken", "MOCK", DECIMALS){}

    
    /**
      Allow anybody to set the balance of anybody.
     */
    function setBalance(address tokenHolder, uint256 amount) public {
      uint256 current = balanceOf(tokenHolder);
      if (current > amount) {
        _burn(tokenHolder, current - amount);
      }
      else if (amount > current) {
        _mint(tokenHolder, amount - current);
      }
    }

}
