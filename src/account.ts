import { privateKeyToAccount } from 'viem/accounts' 


function get_account() {
    const account = privateKeyToAccount('0x...');
    return account;
}

export {
    
    get_account
    
}