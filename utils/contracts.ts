import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x401579ed950c80df14f2e27F60B5E00603e322d3";
const rewardTokenContractAddress = "0x372f660CE2988bE3e2c005a056a77762D9B9282A";
const stakingContractAddress = "0x7da6C8fdb5903a36A9B82Db3a3BfA4a287cC4592";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});