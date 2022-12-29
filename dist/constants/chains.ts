export const devChainID = 31337
export const mainnetChainID = 1
export const ropstenChainID = 3
export const arbitrumChainID = 42161
export const arbitrumRinkebyChainID = 421611
export const auroraChainID = 1313161554
export const auroraTestnetChainID = 1313161555
export const metisChainID = 1088
export const metisTestnetChainID = 588

// Map application mode to supported network.
export const supportedChains: {
  [mode: string]: number[]
} = {
  development: [
    devChainID,
    mainnetChainID,
    ropstenChainID,
    arbitrumChainID,
    arbitrumRinkebyChainID,
    auroraChainID,
    auroraTestnetChainID,
    metisChainID,
    metisTestnetChainID
  ],
  staging: [
    devChainID,
    mainnetChainID,
    ropstenChainID,
    arbitrumChainID,
    arbitrumRinkebyChainID,
    auroraChainID,
    auroraTestnetChainID,
    metisChainID,
    metisTestnetChainID
  ],
  production: [
    ropstenChainID//,
    // MVP initially released with Ropsten support. Additional networks added in the following days.
    // auroraTestnetChainID//,
    // metisTestnetChainID
  ]
}

// Holds all live-like ETH chains e.g. mainnet, ropsten, arbitrum, etc.
export const liveChainIDList: number[] = supportedChains.staging
  .concat(...supportedChains.production)
