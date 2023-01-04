/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PaymentsFacet,
  PaymentsFacetInterface,
} from "../../../contracts/facets/PaymentsFacet";

const _abi = [
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenAlreadyInPaymentTokens",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addSupportedPaymentToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "checkToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaymentTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063ca5e553e14610046578063ed45e0b214610064578063f1880b2414610079575b600080fd5b61004e61009c565b60405161005b919061020c565b60405180910390f35b610077610072366004610259565b6100ad565b005b61008c610087366004610259565b610103565b604051901515815260200161005b565b60606100a86001610116565b905090565b6000546001600160a01b031633146100d857604051632e6c18c960e11b815260040160405180910390fd5b6100e360018261012a565b6101005760405163d8d46ced60e01b815260040160405180910390fd5b50565b600061011060018361013f565b92915050565b6060600061012383610161565b9392505050565b6000610123836001600160a01b0384166101bd565b6001600160a01b03811660009081526001830160205260408120541515610123565b6060816000018054806020026020016040519081016040528092919081815260200182805480156101b157602002820191906000526020600020905b81548152602001906001019080831161019d575b50505050509050919050565b600081815260018301602052604081205461020457508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610110565b506000610110565b6020808252825182820181905260009190848201906040850190845b8181101561024d5783516001600160a01b031683529284019291840191600101610228565b50909695505050505050565b60006020828403121561026b57600080fd5b81356001600160a01b038116811461012357600080fdfea2646970667358221220a7fa3bd02a7140e5d2164254d263dba2e85c566a882eec8910903809c41fe4a964736f6c63430008110033";

type PaymentsFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentsFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentsFacet__factory extends ContractFactory {
  constructor(...args: PaymentsFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentsFacet> {
    return super.deploy(overrides || {}) as Promise<PaymentsFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PaymentsFacet {
    return super.attach(address) as PaymentsFacet;
  }
  override connect(signer: Signer): PaymentsFacet__factory {
    return super.connect(signer) as PaymentsFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsFacetInterface {
    return new utils.Interface(_abi) as PaymentsFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentsFacet {
    return new Contract(address, _abi, signerOrProvider) as PaymentsFacet;
  }
}
