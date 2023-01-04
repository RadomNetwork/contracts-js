/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISubscription,
  ISubscriptionInterface,
} from "../../../contracts/interfaces/ISubscription";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "serviceSubscriptionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "productId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "addOns",
        type: "uint64[]",
      },
    ],
    name: "SubscriptionAddOnsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "serviceSubscriptionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "productId",
        type: "uint64",
      },
    ],
    name: "SubscriptionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "productId",
        type: "uint64",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "serviceSubscriptionId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "productId",
        type: "uint64",
      },
    ],
    name: "SubscriptionRevoked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "offset",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "limit",
        type: "uint64",
      },
    ],
    name: "getPurchasedSubscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "productId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "productType",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "subscriptionStart",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "authenticationString",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "subscriptionEnd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "indexRunsOutOfFunds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "chargingInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "cancelled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Subscriptions.SubscriptionResponse[]",
        name: "subscriptions",
        type: "tuple[]",
      },
      {
        internalType: "uint64",
        name: "cursor",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "offset",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "limit",
        type: "uint64",
      },
    ],
    name: "getSoldSubscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "productId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "productType",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "subscriptionStart",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "authenticationString",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "subscriptionEnd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "indexRunsOutOfFunds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "chargingInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "cancelled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Subscriptions.SubscriptionResponse[]",
        name: "subscriptions",
        type: "tuple[]",
      },
      {
        internalType: "uint64",
        name: "cursor",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    name: "getSubscription",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "customer",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "productId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "productType",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "subscriptionStart",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "authenticationString",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "subscriptionEnd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "indexRunsOutOfFunds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricing",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "chargingInterval",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "cancelled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct Subscriptions.SubscriptionResponse",
        name: "subscription",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
    ],
    name: "revokeSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISubscription__factory {
  static readonly abi = _abi;
  static createInterface(): ISubscriptionInterface {
    return new utils.Interface(_abi) as ISubscriptionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISubscription {
    return new Contract(address, _abi, signerOrProvider) as ISubscription;
  }
}
