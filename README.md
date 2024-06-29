Variable to hold NFTs:

uint public totalNFTs: This variable holds the total number of NFTs minted. It keeps track of how many NFTs exist in the contract.
Object to hold NFT metadata:

struct NFT: Defines a structure to hold metadata for each NFT, including name, description, and creator (address of the creator).
mintNFT function:

function mintNFT(string memory _name, string memory _description) public: This function allows anyone to mint a new NFT by providing a name and description. It creates a new NFT struct with the provided parameters and stores it in the nfts array. It also increments totalNFTs to reflect the new NFT.
listNFTs function:

function listNFTs() public view returns (NFT[] memory): This function returns an array of all NFTs (nfts array) stored in the contract. It allows you to retrieve and view all the metadata of the NFTs.
getTotalSupply function:

function getTotalSupply() public view returns (uint): This function returns the total count of NFTs (totalNFTs). It provides a way to query how many NFTs have been minted in total.
