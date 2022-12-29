/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UserAccessControlFacet,
  UserAccessControlFacetInterface,
} from "../../../contracts/facets/UserAccessControlFacet";

const _abi = [
  {
    inputs: [],
    name: "InsufficientPermissions",
    type: "error",
  },
  {
    inputs: [],
    name: "RoleDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "RoleNameExists",
    type: "error",
  },
  {
    inputs: [],
    name: "UserDoesNotExistOnNetwork",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "RoleAssigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes2",
        name: "permissions",
        type: "bytes2",
      },
    ],
    name: "RoleCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "RoleDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "RoleUnassigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "networkId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes2",
        name: "permissions",
        type: "bytes2",
      },
    ],
    name: "RoleUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "assignRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
      {
        internalType: "bytes2",
        name: "permissions",
        type: "bytes2",
      },
    ],
    name: "changeRolePermissions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
      {
        internalType: "bytes2",
        name: "permissions",
        type: "bytes2",
      },
    ],
    name: "createRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32[]",
        name: "roleNames",
        type: "bytes32[]",
      },
      {
        internalType: "bytes2[]",
        name: "permissions",
        type: "bytes2[]",
      },
    ],
    name: "createRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "deleteRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
    ],
    name: "getNetworkRoleNames",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "getNetworkRolePermissions",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "getNetworkRoleUsers",
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
  {
    inputs: [
      {
        internalType: "bytes20",
        name: "user",
        type: "bytes20",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "getPaginatedUserNetworkIds",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
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
        internalType: "bytes20",
        name: "user",
        type: "bytes20",
      },
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
    ],
    name: "getRoleNameForUserByNetworkId",
    outputs: [
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes2",
        name: "permissionMask",
        type: "bytes2",
      },
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "hasPermissions",
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
    inputs: [
      {
        internalType: "bytes20",
        name: "networkId",
        type: "bytes20",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "unassignRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061120c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806356a087831161007157806356a087831461014257806393e42c89146101635780639851d19714610184578063bdba680b146101de578063d4d90456146101fe578063f48edddf1461021157600080fd5b8063044b15a9146100b95780630a89b063146100e15780630f90089a146100f657806320f148d0146101095780634f9183d11461011c57806356830abd1461012f575b600080fd5b6100cc6100c7366004610e11565b610231565b60405190151581526020015b60405180910390f35b6100f46100ef366004610e54565b6102c3565b005b6100f4610104366004610eca565b6103fc565b6100f4610117366004610f4b565b610495565b6100f461012a366004610f4b565b610584565b6100f461013d366004610f7e565b61065b565b610155610150366004610fb1565b610759565b6040516100d8929190611028565b61017661017136600461104a565b61087e565b6040519081526020016100d8565b6101c5610192366004610e54565b6001600160601b0319919091166000908152601e6020908152604080832093835260039093019052206002015460f01b90565b6040516001600160f01b031990911681526020016100d8565b6101f16101ec366004610e54565b61091b565b6040516100d89190611074565b6100f461020c366004611087565b61094e565b61022461021f3660046110ba565b610ab1565b6040516100d891906110d5565b60008160601b6bffffffffffffffffffffffff1916836bffffffffffffffffffffffff1916146102b857506001600160601b031982166000908152601e602090815260408083206001600160a01b0385168452600280820184528285205485526003909101909252909120015460f01b83166001600160f01b0319908116908416146102bc565b5060015b9392505050565b81600160f01b6102d4818333610231565b6102f15760405163061cbdd360e51b815260040160405180910390fd5b6102fb8484610ad6565b6001600160601b031984166000908152601e60205260408120905b6000858152600383016020526040902061032f90610b01565b81101561037d57600085815260038301602052604081206103509083610b0b565b6001600160a01b0316600090815260028401602052604081205550806103758161112f565b915050610316565b5060008481526003820160205260408120908181818161039d8282610d8b565b50505050600291909101805461ffff19169055506103bb8185610b17565b50604051848152606086901c907f0dc00a8a78807d20bd98e016e59a4378cef3895007ef8098fb01f780a8f56e0b9060200160405180910390a25050505050565b84600160f01b61040d818333610231565b61042a5760405163061cbdd360e51b815260040160405180910390fd5b60005b8581101561048b576104798888888481811061044b5761044b61114a565b905060200201358787858181106104645761046461114a565b90506020020160208101906101179190611160565b806104838161112f565b91505061042d565b5050505050505050565b82600160f01b6104a6818333610231565b6104c35760405163061cbdd360e51b815260040160405180910390fd5b6104cd8585610b23565b156104eb57604051631a80546160e21b815260040160405180910390fd5b6001600160601b031985166000908152601e602090815260408083208784526003810190925290912060028101805461ffff191660f087901c1790556105318287610b46565b50604080518781526001600160f01b031987166020820152606089901c917fa71b27c826002e11b8c80a3e6758fba08a12ae20ffb71c241e3e3dbe0e6c9bde91015b60405180910390a250505050505050565b82600160f01b610595818333610231565b6105b25760405163061cbdd360e51b815260040160405180910390fd5b6105bc8585610b23565b6105d95760405163b810dc5d60e01b815260040160405180910390fd5b6001600160601b031985166000908152601e602090815260408083208784526003810183529281902060028101805461ffff191660f089901c17905581518881526001600160f01b031988169381019390935291606089901c917f306e4e96405abe548642a734363bc5199b6fbfa7c9477d53fb789efbfe032dae9101610573565b81600160f71b61066c818333610231565b6106895760405163061cbdd360e51b815260040160405180910390fd5b6001600160601b031984166000908152601e602090815260408083206001600160a01b0387168452600281018352818420548452600381019092529091206106d19085610b52565b506001600160a01b03841660009081526002820160209081526040808320839055606087811b6001600160601b0319168452601f9092529091206107179187901c610b52565b506040516001600160a01b03851690606087901c907fc7387e1780877dd2eedbcaa4fc99b55874671cc6329662b684083916b1f926c690600090a35050505050565b6001600160601b031983166000908152601f60205260408120606091908290829061078390610b01565b905080861115610797579092509050610876565b806107a2868861117b565b116107ad57846107b7565b6107b78682611193565b67ffffffffffffffff8111156107cf576107cf6111aa565b6040519080825280602002602001820160405280156107f8578160200160208202803683370190505b50915060005b825181101561086f57610833610814828961117b565b6001600160601b03198a166000908152601f6020526040902090610b0b565b8382815181106108455761084561114a565b6001600160a01b0390921660209283029190910190910152806108678161112f565b9150506107fe565b5090925090505b935093915050565b60006001600160601b03198281169084161461090a576001600160601b031983166000908152601f602052604090206108bb90606084901c610b67565b6108d85760405163f650d7a960e01b815260040160405180910390fd5b506001600160601b031981166000908152601e60209081526040808320606086901c8452600201909152902054610915565b506427aba722a960d91b5b92915050565b6001600160601b031982166000908152601e6020908152604080832084845260030190915290206060906102bc90610b89565b82600160f71b61095f818333610231565b61097c5760405163061cbdd360e51b815260040160405180910390fd5b6109868585610ad6565b6001600160601b031985166000908152601e602090815260408083206001600160a01b03871684526002810190925290912054156109f7576001600160a01b038416600090815260028201602090815260408083205483526003840190915290206109f19085610b52565b50610a22565b606084811b6001600160601b0319166000908152601f60205260409020610a209188901c610b96565b505b6001600160a01b03841660009081526002820160209081526040808320889055878352600384019091529020610a589085610b96565b50836001600160a01b03168660601c6001600160a01b03167ffea5d50169cd949a603760f8b6952bb6cccc25eaddd22a28a63fc6c5891e981687604051610aa191815260200190565b60405180910390a3505050505050565b6001600160601b031981166000908152601e6020526040902060609061091590610b89565b610ae08282610b23565b610afd5760405163b810dc5d60e01b815260040160405180910390fd5b5050565b6000610915825490565b60006102bc8383610bab565b60006102bc8383610bd5565b6001600160601b031982166000908152601e602052604081206102bc9083610cc8565b60006102bc8383610ce0565b60006102bc836001600160a01b038416610bd5565b6001600160a01b038116600090815260018301602052604081205415156102bc565b606060006102bc83610d2f565b60006102bc836001600160a01b038416610ce0565b6000826000018281548110610bc257610bc261114a565b9060005260206000200154905092915050565b60008181526001830160205260408120548015610cbe576000610bf9600183611193565b8554909150600090610c0d90600190611193565b9050818114610c72576000866000018281548110610c2d57610c2d61114a565b9060005260206000200154905080876000018481548110610c5057610c5061114a565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610c8357610c836111c0565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610915565b6000915050610915565b600081815260018301602052604081205415156102bc565b6000818152600183016020526040812054610d2757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610915565b506000610915565b606081600001805480602002602001604051908101604052809291908181526020018280548015610d7f57602002820191906000526020600020905b815481526020019060010190808311610d6b575b50505050509050919050565b5080546000825590600052602060002090810190610da99190610dac565b50565b5b80821115610dc15760008155600101610dad565b5090565b80356001600160f01b031981168114610ddd57600080fd5b919050565b80356001600160601b031981168114610ddd57600080fd5b80356001600160a01b0381168114610ddd57600080fd5b600080600060608486031215610e2657600080fd5b610e2f84610dc5565b9250610e3d60208501610de2565b9150610e4b60408501610dfa565b90509250925092565b60008060408385031215610e6757600080fd5b610e7083610de2565b946020939093013593505050565b60008083601f840112610e9057600080fd5b50813567ffffffffffffffff811115610ea857600080fd5b6020830191508360208260051b8501011115610ec357600080fd5b9250929050565b600080600080600060608688031215610ee257600080fd5b610eeb86610de2565b9450602086013567ffffffffffffffff80821115610f0857600080fd5b610f1489838a01610e7e565b90965094506040880135915080821115610f2d57600080fd5b50610f3a88828901610e7e565b969995985093965092949392505050565b600080600060608486031215610f6057600080fd5b610f6984610de2565b925060208401359150610e4b60408501610dc5565b60008060408385031215610f9157600080fd5b610f9a83610de2565b9150610fa860208401610dfa565b90509250929050565b600080600060608486031215610fc657600080fd5b610fcf84610de2565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b8381101561101d5781516001600160a01b031687529582019590820190600101610ff8565b509495945050505050565b60408152600061103b6040830185610fe4565b90508260208301529392505050565b6000806040838503121561105d57600080fd5b61106683610de2565b9150610fa860208401610de2565b6020815260006102bc6020830184610fe4565b60008060006060848603121561109c57600080fd5b6110a584610de2565b925060208401359150610e4b60408501610dfa565b6000602082840312156110cc57600080fd5b6102bc82610de2565b6020808252825182820181905260009190848201906040850190845b8181101561110d578351835292840192918401916001016110f1565b50909695505050505050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561114357611143611119565b5060010190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561117257600080fd5b6102bc82610dc5565b6000821982111561118e5761118e611119565b500190565b6000828210156111a5576111a5611119565b500390565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122036ca85c78ddc69dba34192edfe30b3a1cda2aee6409564b191f93af548bbe4ad64736f6c63430008090033";

type UserAccessControlFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserAccessControlFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserAccessControlFacet__factory extends ContractFactory {
  constructor(...args: UserAccessControlFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserAccessControlFacet> {
    return super.deploy(overrides || {}) as Promise<UserAccessControlFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserAccessControlFacet {
    return super.attach(address) as UserAccessControlFacet;
  }
  override connect(signer: Signer): UserAccessControlFacet__factory {
    return super.connect(signer) as UserAccessControlFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserAccessControlFacetInterface {
    return new utils.Interface(_abi) as UserAccessControlFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserAccessControlFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UserAccessControlFacet;
  }
}