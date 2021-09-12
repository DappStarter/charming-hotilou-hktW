require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember assume inner enter bridge turn'; 
let testAccounts = [
"0x1c605a20f108d65a8cc74ab5e82c979dbe45e15d7230135ebe2a118c1d7194b0",
"0x9d10b4d2debd46de4d55a69dd5e8c929e813dfa956937ed3df1ba035284ec1ce",
"0x9b2df4d1b770363423fd35cc4f9193a8498de97a84031e98c6b986af895cda4a",
"0x7edb765aa4d1e0368903642258455cd0838494c17d846deb04bd1d5531396efa",
"0x6c078aa3bddf8e9b5cda98cb6f6a255824f1e2ee7d094e46e3f87561c27b7513",
"0x24a8c2f73febf220d006299e5d649630918f928c33d34fe2357768d58d2f4491",
"0x2c6d01ffe04b3e64984a3068aa7751cb1b0813a5b0a3170ff8faaeade91e4552",
"0xef8ef6d0b9fc797f6d4b3e8636dfb6a8f1d8b4ad275b0eaf8f6136dfcdcf739e",
"0x0e1a707a9df0671d3e7986ea47b8f58a02fb62ca3d617ddbdcbef62be465feed",
"0x186a4f1df2a523b6f49059cd21f32cd2b4643f007d9de1e157b736104f4cfac5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

