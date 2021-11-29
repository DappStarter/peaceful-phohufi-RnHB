require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind artist hunt dry flower spread'; 
let testAccounts = [
"0x5de2ae9a98ab05ca6451862d2ee319d1093cd54e9eafb2824d88e62453c262a6",
"0x71396431da6887167d2688134f954482ecb45c77aa388ebed36f6f31a39fd835",
"0x11f16fbcb1d59dca88b0bbd96605a8020488d6811d364fa8aac8a17779001997",
"0x7a277c7bb761c07af187b1bf1bbdf1f9d38c9c06bc540bd38ef5aa4fc44452b2",
"0xb4410a2c0a750284b6f39a4c0c08a747cb0fc05de4c78eddf67174246280488a",
"0x626e1e1f0b102768f2bad56744ed5dd3d9222909d84cc03a6b9c72be5f336dab",
"0x292d1977b86639f81756cf00f1b2e1c54d87d5d83e1f91fc4babb58355e514fd",
"0x9e4db71c68b92f902789591eea61f0a4725be7b51386721e1fbbed5edb295e11",
"0x59fef5d140477916e2cbb97d115a985711a1671608506dc53b38cc385b9bbc3c",
"0x28a3519e0d0940ae83e30689f833ccff9850ec60c2baacbfe24e39ae5a9525b0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


