# ERC-721 Staking App

WEB3 OE project to tokenize and stake ERC-721 NFTs to earn ERC-20 tokens.

## Getting Started

To use the ERC-721 Staking app, you'll need to clone this repository, install dependencies, set up environment variables and contract addresses, and deploy the application. Below are the steps to follow:

### Deploying Smart Contracts
[ERC-721 NFT Drop](https://thirdweb.com/thirdweb.eth/DropERC721)

[ERC-20 Token](https://thirdweb.com/thirdweb.eth/TokenERC20)

[ERC-721 Staking](https://thirdweb.com/thirdweb.eth/NFTStake)


### Installing Dependencies

This application requires several dependencies to function, including thirdweb Connect SDK. Install them using npm or yarn:

```
npm install
```
or
```
yarn install
```
### Setting Environment Variables

Set the following variables in the `.env` file

- `NEXT_PUBLIC_CLIENT_ID`: thirdweb API key. (As of now my vscode in not able to detect the .env file so I have added the key in the code itself)

### Setting Smart Contracts

Set your ERC-721 NFT, ERC-20 Token, and ERC-721 Staking smart contracts in `utils/contracts.ts`

