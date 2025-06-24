import { createWalletClient,custom } from "https://esm.sh/viem"
const connectButton=document.getElementById("connectButton");

let walletClient

async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        walletClient = createWalletClient ({
            transport : custom(window.ethereum) //for different types of wallets, we can use different transports in the future
         })
         await walletClient.requestAddresses()
         connectButton.innerHTML = "CONNECTED!!"
    }
    else {
        connectButton.innerHTML = "Please install MetaMask!";
    }
}

connectButton.onclick=connect
