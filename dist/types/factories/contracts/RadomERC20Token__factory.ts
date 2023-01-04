/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RadomERC20Token,
  RadomERC20TokenInterface,
} from "../../contracts/RadomERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IncorrectEthAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PCTBuyEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PCTSellEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e7538038062000e75833981016040819052620000349162000191565b6040518060400160405280600f81526020016e2930b237b6a2a92199182a37b5b2b760891b81525060405180604001604052806003815260200162444f4d60e81b81525081600390816200008991906200024f565b5060046200009882826200024f565b505050620000ad3382620000c660201b60201c565b50600580546001600160a01b0319163317905562000343565b6001600160a01b038216620001215760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013591906200031b565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b600060208284031215620001a457600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001d657607f821691505b602082108103620001f757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018c57600081815260208120601f850160051c81016020861015620002265750805b601f850160051c820191505b81811015620002475782815560010162000232565b505050505050565b81516001600160401b038111156200026b576200026b620001ab565b62000283816200027c8454620001c1565b84620001fd565b602080601f831160018114620002bb5760008415620002a25750858301515b600019600386901b1c1916600185901b17855562000247565b600085815260208120601f198616915b82811015620002ec57888601518255948401946001909101908401620002cb565b50858210156200030b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200033d57634e487b7160e01b600052601160045260246000fd5b92915050565b610b2280620003536000396000f3fe6080604052600436106100dd5760003560e01c8063395093511161007f578063a0ef91df11610059578063a0ef91df14610238578063a457c2d71461024d578063a9059cbb1461026d578063dd62ed3e1461028d57600080fd5b806339509351146101cd57806370a08231146101ed57806395d89b411461022357600080fd5b80632397e4d7116100bb5780632397e4d71461015c57806323b872dd1461017e5780632d296bf11461019e578063313ce567146101b157600080fd5b806306fdde03146100e2578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b3480156100ee57600080fd5b506100f76102ad565b6040516101049190610912565b60405180910390f35b34801561011957600080fd5b5061012d61012836600461097c565b61033f565b6040519015158152602001610104565b34801561014957600080fd5b506002545b604051908152602001610104565b34801561016857600080fd5b5061017c6101773660046109a6565b610359565b005b34801561018a57600080fd5b5061012d6101993660046109bf565b6103da565b61017c6101ac3660046109a6565b6103fe565b3480156101bd57600080fd5b5060405160128152602001610104565b3480156101d957600080fd5b5061012d6101e836600461097c565b610490565b3480156101f957600080fd5b5061014e6102083660046109fb565b6001600160a01b031660009081526020819052604090205490565b34801561022f57600080fd5b506100f76104b2565b34801561024457600080fd5b5061017c6104c1565b34801561025957600080fd5b5061012d61026836600461097c565b610517565b34801561027957600080fd5b5061012d61028836600461097c565b610597565b34801561029957600080fd5b5061014e6102a8366004610a1d565b6105a5565b6060600380546102bc90610a50565b80601f01602080910402602001604051908101604052809291908181526020018280546102e890610a50565b80156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b5050505050905090565b60003361034d8185856105d0565b60019150505b92915050565b336000908152600660205260409020819055600554610381906001600160a01b031682610597565b5061038a6104c1565b600554604080513381526001600160a01b03909216602083015281018290527fcd302abd7c274d2566b41886ffc8e1e6bba820258e81fe7e58c5e4515f9a424c906060015b60405180910390a150565b6000336103e88582856106f4565b6103f385858561076e565b506001949350505050565b610410670de0b6b3a764000034610aa0565b811461042f57604051638b6ebb4d60e01b815260040160405180910390fd5b600554610446906001600160a01b031633836103da565b50600554604080516001600160a01b03909216825233602083015281018290527f2cfc721878071f1e2fc85b85591116a44afcaba74ab3b76ec5da59e91ef1a036906060016103cf565b60003361034d8185856104a383836105a5565b6104ad9190610ac2565b6105d0565b6060600480546102bc90610a50565b3360008181526006602052604081208054919055906108fc6104eb83670de0b6b3a7640000610ad5565b6040518115909202916000818181858888f19350505050158015610513573d6000803e3d6000fd5b5050565b6000338161052582866105a5565b90508381101561058a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103f382868684036105d0565b60003361034d81858561076e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106325760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610581565b6001600160a01b0382166106935760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610581565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061070084846105a5565b90506000198114610768578181101561075b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610581565b61076884848484036105d0565b50505050565b6001600160a01b0383166107d25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610581565b6001600160a01b0382166108345760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610581565b6001600160a01b038316600090815260208190526040902054818110156108ac5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610581565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610768565b600060208083528351808285015260005b8181101561093f57858101830151858201604001528201610923565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461097757600080fd5b919050565b6000806040838503121561098f57600080fd5b61099883610960565b946020939093013593505050565b6000602082840312156109b857600080fd5b5035919050565b6000806000606084860312156109d457600080fd5b6109dd84610960565b92506109eb60208501610960565b9150604084013590509250925092565b600060208284031215610a0d57600080fd5b610a1682610960565b9392505050565b60008060408385031215610a3057600080fd5b610a3983610960565b9150610a4760208401610960565b90509250929050565b600181811c90821680610a6457607f821691505b602082108103610a8457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082610abd57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561035357610353610a8a565b808202811582820484141761035357610353610a8a56fea264697066735822122082eb9dbf37ee6781183fd5704ff932b43ea889cc1a8ac8fcc41a55811e9aa5e364736f6c63430008110033";

type RadomERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RadomERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RadomERC20Token__factory extends ContractFactory {
  constructor(...args: RadomERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RadomERC20Token> {
    return super.deploy(
      _initialSupply,
      overrides || {}
    ) as Promise<RadomERC20Token>;
  }
  override getDeployTransaction(
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  override attach(address: string): RadomERC20Token {
    return super.attach(address) as RadomERC20Token;
  }
  override connect(signer: Signer): RadomERC20Token__factory {
    return super.connect(signer) as RadomERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RadomERC20TokenInterface {
    return new utils.Interface(_abi) as RadomERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RadomERC20Token {
    return new Contract(address, _abi, signerOrProvider) as RadomERC20Token;
  }
}
