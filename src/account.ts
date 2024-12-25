import { privateKeyToAccount, mnemonicToAccount } from 'viem/accounts' 
import { ethers } from "ethers";

function get_account() {
    require('dotenv').config();
    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }

    const account = privateKeyToAccount(`0x${privateKey}`);

    const mnemonic = process.env.MNEMONIC;

    if (!mnemonic) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }

    const account2 = mnemonicToAccount(mnemonic);
    console.log(account2.address);

    return account;
}

export function generateRandomAddress() {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
  }


export {
    get_account
}

