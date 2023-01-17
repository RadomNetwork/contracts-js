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
    name: "FeatureNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientPermissions",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgMustDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgStreamDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductHasNoPrice",
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
    name: "SubscriptionNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionVoid",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedProduct",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    inputs: [],
    name: "UserDoesNotExistOnOrganization",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "orgId",
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
        name: "orgId",
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
        name: "orgId",
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
        name: "orgId",
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
        name: "orgId",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
      },
    ],
    name: "getOrganizationRoleNames",
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
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "getOrganizationRolePermissions",
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
        internalType: "address",
        name: "orgId",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "roleName",
        type: "bytes32",
      },
    ],
    name: "getOrganizationRoleUsers",
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
        internalType: "address",
        name: "user",
        type: "address",
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
    name: "getPaginatedUserOrganizationIds",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "orgId",
        type: "address",
      },
    ],
    name: "getRoleNameForUserByOrganizationId",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
        internalType: "address",
        name: "orgId",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50611193806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063aeebbaac11610071578063aeebbaac14610178578063b12b50571461018b578063c36bc2651461019e578063dc460933146101b1578063dcfd4992146101c4578063ed360077146101d757600080fd5b8063054cc9d6146100b95780634202d7de146100e15780635076b1b7146101015780635732c2f114610122578063936e1a6a14610137578063aabd006014610158575b600080fd5b6100cc6100c7366004610dcd565b610230565b60405190151581526020015b60405180910390f35b6100f46100ef366004610e10565b6102ab565b6040516100d89190610e7e565b61011461010f366004610e91565b6102e6565b6040519081526020016100d8565b610135610130366004610ec4565b61038e565b005b61014a610145366004610ef7565b61046d565b6040516100d8929190610f2a565b61016b610166366004610f4c565b610593565b6040516100d89190610f67565b610135610186366004610ff7565b6105b7565b610135610199366004610e91565b610650565b6101356101ac366004610e10565b610746565b6101356101bf366004611078565b610888565b6101356101d2366004610ec4565b6109e7565b6102176101e5366004610e10565b6001600160a01b03919091166000908152600c6020908152604080832093835260039093019052206002015460f01b90565b6040516001600160f01b031990911681526020016100d8565b6000816001600160a01b0316836001600160a01b0316146102a057506001600160a01b038281166000908152600c6020908152604080832093851683526002808501835281842054845260039094019091529020015460f01b83166001600160f01b0319908116908416146102a4565b5060015b9392505050565b6001600160a01b0382166000908152600c6020908152604080832084845260030190915290206060906102dd90610acd565b90505b92915050565b6000826001600160a01b0316826001600160a01b03161461037e576001600160a01b0383166000908152600d60205260409020610331906001600160601b0319606085901b16610ada565b61034e57604051632236709760e01b815260040160405180910390fd5b506001600160a01b038082166000908152600c6020908152604080832093861683526002909301905220546102e0565b506427aba722a960d91b92915050565b82600160f01b61039f818333610230565b6103bc5760405163061cbdd360e51b815260040160405180910390fd5b6103c68585610af2565b6103e35760405163b810dc5d60e01b815260040160405180910390fd5b6001600160a01b0385166000818152600c602090815260408083208884526003810183529281902060028101805461ffff191660f08a901c17905581518981526001600160f01b03198916938101939093529293917f306e4e96405abe548642a734363bc5199b6fbfa7c9477d53fb789efbfe032dae91015b60405180910390a250505050505050565b6001600160a01b0383166000908152600d60205260408120606091908290829061049690610b14565b9050808611156104aa57909250905061058b565b806104b586886110c1565b116104c057846104ca565b6104ca86826110d4565b67ffffffffffffffff8111156104e2576104e26110e7565b60405190808252806020026020018201604052801561050b578160200160208202803683370190505b50915060005b82518110156105845761054561052782896110c1565b6001600160a01b038a166000908152600d6020526040902090610b1e565b60601c83828151811061055a5761055a6110fd565b6001600160a01b03909216602092830291909101909101528061057c81611113565b915050610511565b5090925090505b935093915050565b6001600160a01b0381166000908152600c602052604090206060906102e090610acd565b84600160f01b6105c8818333610230565b6105e55760405163061cbdd360e51b815260040160405180910390fd5b60005b858110156106465761063488888884818110610606576106066110fd565b9050602002013587878581811061061f5761061f6110fd565b90506020020160208101906101d2919061112c565b8061063e81611113565b9150506105e8565b5050505050505050565b81600160f71b610661818333610230565b61067e5760405163061cbdd360e51b815260040160405180910390fd5b6001600160a01b038085166000908152600c6020908152604080832093871683526002840182528083205483526003840190915290206106be9085610b2a565b506001600160a01b03841660009081526002820160209081526040808320839055600d90915290206106fe906001600160601b0319606088901b16610b3f565b50836001600160a01b0316856001600160a01b03167fc7387e1780877dd2eedbcaa4fc99b55874671cc6329662b684083916b1f926c660405160405180910390a35050505050565b81600160f01b610757818333610230565b6107745760405163061cbdd360e51b815260040160405180910390fd5b61077e8484610b4b565b6001600160a01b0384166000908152600c60205260408120905b600085815260038301602052604090206107b190610b14565b8110156107ff57600085815260038301602052604081206107d29083610b1e565b6001600160a01b0316600090815260028401602052604081205550806107f781611113565b915050610798565b5060008481526003820160205260408120908181818161081f8282610d5f565b50505050600291909101805461ffff191690555061083d8185610b3f565b50846001600160a01b03167f0dc00a8a78807d20bd98e016e59a4378cef3895007ef8098fb01f780a8f56e0b8560405161087991815260200190565b60405180910390a25050505050565b82600160f71b610899818333610230565b6108b65760405163061cbdd360e51b815260040160405180910390fd5b6108c08585610b4b565b6001600160a01b038086166000908152600c6020908152604080832093871683526002840190915290205415610929576001600160a01b038416600090815260028201602090815260408083205483526003840190915290206109239085610b2a565b5061095b565b6001600160a01b0384166000908152600d60205260409020610959906001600160601b0319606089901b16610b76565b505b6001600160a01b038416600090815260028201602090815260408083208890558783526003840190915290206109919085610b82565b50836001600160a01b0316866001600160a01b03167ffea5d50169cd949a603760f8b6952bb6cccc25eaddd22a28a63fc6c5891e9816876040516109d791815260200190565b60405180910390a3505050505050565b82600160f01b6109f8818333610230565b610a155760405163061cbdd360e51b815260040160405180910390fd5b610a1f8585610af2565b15610a3d57604051631a80546160e21b815260040160405180910390fd5b6001600160a01b0385166000908152600c602090815260408083208784526003810190925290912060028101805461ffff191660f087901c179055610a828287610b76565b50604080518781526001600160f01b0319871660208201526001600160a01b038916917fa71b27c826002e11b8c80a3e6758fba08a12ae20ffb71c241e3e3dbe0e6c9bde910161045c565b606060006102a483610b97565b600081815260018301602052604081205415156102dd565b6001600160a01b0382166000908152600c602052604081206102dd9083610ada565b60006102e0825490565b60006102dd8383610bf3565b60006102dd836001600160a01b038416610c1d565b60006102dd8383610c1d565b610b558282610af2565b610b725760405163b810dc5d60e01b815260040160405180910390fd5b5050565b60006102dd8383610d10565b60006102dd836001600160a01b038416610d10565b606081600001805480602002602001604051908101604052809291908181526020018280548015610be757602002820191906000526020600020905b815481526020019060010190808311610bd3575b50505050509050919050565b6000826000018281548110610c0a57610c0a6110fd565b9060005260206000200154905092915050565b60008181526001830160205260408120548015610d06576000610c416001836110d4565b8554909150600090610c55906001906110d4565b9050818114610cba576000866000018281548110610c7557610c756110fd565b9060005260206000200154905080876000018481548110610c9857610c986110fd565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610ccb57610ccb611147565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102e0565b60009150506102e0565b6000818152600183016020526040812054610d57575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102e0565b5060006102e0565b5080546000825590600052602060002090810190610d7d9190610d80565b50565b5b80821115610d955760008155600101610d81565b5090565b80356001600160f01b031981168114610db157600080fd5b919050565b80356001600160a01b0381168114610db157600080fd5b600080600060608486031215610de257600080fd5b610deb84610d99565b9250610df960208501610db6565b9150610e0760408501610db6565b90509250925092565b60008060408385031215610e2357600080fd5b610e2c83610db6565b946020939093013593505050565b600081518084526020808501945080840160005b83811015610e735781516001600160a01b031687529582019590820190600101610e4e565b509495945050505050565b6020815260006102dd6020830184610e3a565b60008060408385031215610ea457600080fd5b610ead83610db6565b9150610ebb60208401610db6565b90509250929050565b600080600060608486031215610ed957600080fd5b610ee284610db6565b925060208401359150610e0760408501610d99565b600080600060608486031215610f0c57600080fd5b610f1584610db6565b95602085013595506040909401359392505050565b604081526000610f3d6040830185610e3a565b90508260208301529392505050565b600060208284031215610f5e57600080fd5b6102dd82610db6565b6020808252825182820181905260009190848201906040850190845b81811015610f9f57835183529284019291840191600101610f83565b50909695505050505050565b60008083601f840112610fbd57600080fd5b50813567ffffffffffffffff811115610fd557600080fd5b6020830191508360208260051b8501011115610ff057600080fd5b9250929050565b60008060008060006060868803121561100f57600080fd5b61101886610db6565b9450602086013567ffffffffffffffff8082111561103557600080fd5b61104189838a01610fab565b9096509450604088013591508082111561105a57600080fd5b5061106788828901610fab565b969995985093965092949392505050565b60008060006060848603121561108d57600080fd5b61109684610db6565b925060208401359150610e0760408501610db6565b634e487b7160e01b600052601160045260246000fd5b808201808211156102e0576102e06110ab565b818103818111156102e0576102e06110ab565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060018201611125576111256110ab565b5060010190565b60006020828403121561113e57600080fd5b6102dd82610d99565b634e487b7160e01b600052603160045260246000fdfea26469706673582212204ecaab74e3c8f6d59a680ba7657af0f81b52fe436607d66e7cd14b7bff1013c564736f6c63430008110033";

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
