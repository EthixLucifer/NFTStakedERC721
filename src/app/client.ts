import { createThirdwebClient } from 'thirdweb';

// const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;
 const CLIENT_ID = "0cab062a763cae5bc86d542103e683b1";
export const client = createThirdwebClient({
    clientId: CLIENT_ID,
});