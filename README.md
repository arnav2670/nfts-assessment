ARNAV Token Smart Contract
This Solidity smart contract implements a basic ERC-20-like token called "ARNAV" (with the abbreviation "ARN"). It allows for the minting and burning of tokens, tracks the total supply of the token, and provides a simple way to monitor user balances.

Features
Token Details:

Name: ARNAV
Symbol: ARN
Standard: ERC-20-like (Custom Implementation)
Minting:

Allows users to mint new tokens and increase their balance.
The total supply is updated whenever new tokens are minted.
Burning:

Allows users to burn tokens (i.e., decrease their balance).
The total supply decreases when tokens are burned.
Tracking Balances:

The contract maintains a mapping to track individual user balances.
Event Emissions:

Events are emitted during minting and burning processes, allowing for transparent tracking of token changes.
Public Variables
Tokenname: Name of the token (string) - "ARNAV"
Tokenabbr: Abbreviation for the token (string) - "ARN"
totalSupply: The total number of tokens that exist (uint). It is updated with every minting and burning.
Functions
1. mint(address account, uint amount)
This function allows the contract owner (or anyone with permission) to mint new tokens.

Parameters:

account: The address to which new tokens will be minted.
amount: The number of tokens to mint.
Functionality:

Increases the total supply by the minted amount.
Increases the balance of the specified account.
Emits a Mint event to log the action.
Event: Mint(address indexed account, uint amount)

2. burn(address account, uint amount)
This function allows a user to burn a specific amount of their tokens.

Parameters:

account: The address from which tokens will be burned.
amount: The number of tokens to burn.
Functionality:

Ensures that the user has sufficient balance to burn the tokens.
Decreases the total supply by the burned amount.
Decreases the balance of the specified account.
Emits a Burn event to log the action.
Event: Burn(address indexed account, uint amount)

3. getTotalSupply()
This function returns the total supply of the token.

Returns: uint - The total supply of the token.
Usage
Minting Tokens: To mint tokens, the mint() function should be called, passing in the recipient address and the amount of tokens to mint. For example:

solidity
Copy code
mint(address user, 100);
This will mint 100 tokens to the specified user's address.

Burning Tokens: To burn tokens, the burn() function should be called, passing in the account to burn tokens from and the amount to burn. For example:

solidity
Copy code
burn(address user, 50);
This will burn 50 tokens from the specified user's balance.

Getting the Total Supply: To check the total supply of tokens, simply call the getTotalSupply() function:

solidity
Copy code
uint total = getTotalSupply();
Events
Mint: Emitted whenever new tokens are minted.

Parameters:
account: The account to which tokens are minted.
amount: The number of tokens minted.
Burn: Emitted whenever tokens are burned.

Parameters:
account: The account from which tokens are burned.
amount: The number of tokens burned.
