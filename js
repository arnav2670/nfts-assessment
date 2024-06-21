/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Public variables
    string public Tokenname = "ARNAV";
    string public Tokenabbr = "ARN";
    uint public totalSupply = 0;

    // Mapping to track balances
    mapping(address => uint) public balances;

    // Events to track minting and burning
    event Mint(address indexed account, uint amount);
    event Burn(address indexed account, uint amount);

    // Function to mint new tokens
    function mint(address account, uint amount) public {
        totalSupply += amount;
        balances[account] += amount;
        emit Mint(account, amount);
    }

    // Function to burn tokens
    function burn(address account, uint amount) public {
        require(balances[account] >= amount, "Insufficient balance");
        
        totalSupply -= amount;
        balances[account] -= amount;
        emit Burn(account, amount);
    }
