const { ethers } = require('ethers')
const rpcUrl='https://cloudflare-eth.com/'
const provider =new ethers.providers.JsonRpcProvider(rpcUrl)

const address='0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5'
// const address1='0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main=async()=>{
const balance=await provider.getBalance(address)
console.log(balance);
}

main()