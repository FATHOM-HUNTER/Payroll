# Payroll Management System using Blockchain

## Tech Stack

- Frontend : React.js
- Backend: Solidity
- Server Database: Moralis
- Chain : Polygon Chain
- Contract Deployment : Remix
- Website Hosting : Firebase

## Installation

```
  git clone https://github.com/FATHOM-HUNTER/Payroll.git
  cd Payroll
  npm install or yarn install
```

## General Setup

To run this project, you will need to create a .env file outside /src & provide your appId and serverUrl from Moralis

```
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

- Install [Metamask](https://metamask.io/)
- Get the SERVER_URL & APP_ID after creating a [Moralis Server](https://admin.moralis.io/servers) & clicking on "View Details".
- Copy the [contract](https://github.com/FATHOM-HUNTER/Payroll/blob/main/smart_contract/Payroll.sol), head over to [Remix](https://remix.ethereum.org/) & paste inside /contracts.
- Head over to your selected network's faucets & get some free tokens.
- Open /helpers/networks.js & add the required network details, same on which you will deploy your contract & create a moralis server. You'd also have to change getBlockExplorer line from everywhere inside code to your specific network.
- Before deploying contract, make sure you select "Injected Web3" & use the same network inside Metamask as you used to create the moralis server. ( For ex. Ropsten, Mumbai )
- Copy the contract address you got after deploying the contract & replace with the address inside /utils/constants.js
- Copy the ABI you got after deploying & replace with the ABI inside /utils/ABI.json
- You're Done.

## Acknowledgements

- [Moralis Docs](https://docs.moralis.io/introduction/readme)
- [React Moralis](https://github.com/MoralisWeb3/react-moralis)
- [Ethereum Boilerplate](https://github.com/ethereum-boilerplate/ethereum-boilerplate)
- [Web3 Social Network Boilerplate](https://github.com/ethereum-boilerplate/web3-social-network-boilerplate)
