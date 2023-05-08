# radom-contracts-js
This package contains automatically published Radom contract ABIs and typescript bindings. It relies on the [ethers.js](https://github.com/ethers-io/ethers.js/) library.

# How to use
Refer to Radom documentation for contract and token addresses:

* [Radom contract address per chain](https://docs.radom.network/additional-resources/chainsrpcs)
* [Payment tokens supported by Radom Pay](https://docs.radom.network/additional-resources/chainstokens)

1. Install `ethers.js` and `radom-contracts-js`:
```
npm install ethers https://github.com/RadomNetwork/radom-contracts-js.git
```

2. Import and initialize a facet from `@radom/radom-contracts-js`:
```typescript
import { BillingFacet__factory } from '@radom/radom-contracts-js'

/*
  Radom contract address. Find the list of addresses per chain here:
  https://docs.radom.network/additional-resources/chainsrpcs
*/
const radomContractAddress  = '0x63d76ee7B8b31F8D8CD1D96953C21Adb6fc5E028'

const billingFacet = BillingFacet__factory.connect(
  radomContractAddress,
  window.ethereum
)

const erc20 = ERC20__factory.connect(
  // Token address we'd like to use for payment
  // E.g. USDC on Polygon
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',

  // Provider
  window.ethereum
)
```

3. Call Radom contract functions, for example, to make a simple payment:
```typescript
// Approve an allowance for the Radom contract
let tx = await erc20.approve(
  radomContractAddress,
  ethers.utils.parseUnits('10', 6)
)

// Confirm the allowance transaction
await tx.wait(1)

// Now make the payment
tx = await billingFacet.pay(
  {
    /* Amount formatted in the token's decimals */
    price: ethers.utils.parseUnits('10', 6),

    /* USDC */
    token: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',

    /* Customer address */
    customer: window.ethereum.selectedAddress,
    
    /* Seller address */
    seller: '0xb44A6Bf1e5Af931378046349Db73485367ba6c1B',
    
    /* Polygon mainnet chain id */
    chainId: 137
  },

  /* fromRadomBalance */
  false,
  
  /* metadata KVP */
  []
)

// Wait for a confirmation of 1 block
const receipt = await tx.wait(1)

// Print the transaction hash
console.log(receipt.transactionHash)
```

# Cancelling a subscription
To cancel a subscription, simply call the billing facet's `cancelSubscription(subscriptionId)` function as the customer or `revokeSubscription(subscriptionId)` as the seller:
```typescript
// Connect to Radom's Billing facet
const billingFacet = BillingFacet__factory.connect(
  radomContractAddress,
  window.ethereum
)

// Cancel a subscription as the customer
const tx = await billingFacet.cancelSubscription(5)
const receipt = await tx.wait(1)
```

# Withdrawing funds from sales
To withdraw funds received from sales, simply call the treasury facet's `withdrawSellBalance(sellerAddress, token, amount)` function to withdraw to the seller wallet or `withdrawSellBalanceToRecipient(sellerAddress, token, amount, recipientAddress)` to withdraw to a different wallet.

Here's an example of withdrawing $200.59 [USDC on Ethereum mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) from the sell balance to the seller's wallet:
```typescript
// Connect to Radom's Treasury facet
const treasuryFacet = TreasuryFacet__factory.connect(
  radomContractAddress,
  window.ethereum
)

// Withdraw sales balance to seller's Ethereum address
const tx = await treasuryFacet.withdrawSellBalance(
  {
    sellerAddress: '0xb44A6Bf1e5Af931378046349Db73485367ba6c1B',

    /* USDC */
    token: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',

    /* Amount of tokens to withdraw */
    amount: 200.59
  }
)
const receipt = await tx.wait(1)
```

# Notes
This package is a barebones autogenerated ABIs and Typescript bindings using [Typechain](https://www.npmjs.com/package/@typechain/hardhat) and for most cases should probably not be used. Instead, our SDK should be used which utilizes this package but instead provides a simpler interface to interact with.
