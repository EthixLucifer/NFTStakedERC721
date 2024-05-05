import { defineChain } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";

// import { baseSepolia } from "thirdweb/chains";
const CLI = process.env.client_id;
export const chain = defineChain( polygonAmoy );