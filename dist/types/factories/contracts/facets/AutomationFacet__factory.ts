/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AutomationFacet,
  AutomationFacetInterface,
} from "../../../contracts/facets/AutomationFacet";

const _abi = [
  {
    inputs: [],
    name: "AutoDepositConfigDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AutoDepositDisabled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "AutoDepositTriggerFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "FeatureNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAllowance",
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
    name: "InsufficientWalletBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAutoDepositConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidChargingInterval",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMeteredCharge",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSubscriptionId",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSubscriptionsToAutoDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "OrgMustDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductHasNoPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "ReEntrancyGuard",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotCloseEnoughToExpire",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionNotMetered",
    type: "error",
  },
  {
    inputs: [],
    name: "SubscriptionVoid",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedMethod",
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
    name: "WrongChainId",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
    ],
    name: "AutoDepositConfigDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "useRadomBalanceForMeteredCharge",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "disableAutoDeposit",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "minimumTimeUntilExpireInBps",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "minimumDuration",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "maxFeeInBps",
            type: "uint16",
          },
        ],
        indexed: false,
        internalType: "struct Automation.DepositConfig",
        name: "depositConfig",
        type: "tuple",
      },
    ],
    name: "AutoDepositConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "minimumTimeUntilExpire",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "minimumDuration",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxFeeInBasisPoints",
        type: "uint32",
      },
    ],
    name: "AutoDepositDefaultValuesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "triggeredBy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "subscriptionIds",
        type: "uint64[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    name: "AutoDepositTriggered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "autoDepositMinimumTimeUntilExpireInBps",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "autoDepositMinimumDuration",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "autoDepositMaxFeeInBasisPoints",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "minTimeUntilExpireInSeconds",
        type: "uint16",
      },
    ],
    name: "changeAutomationValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultValues",
    outputs: [
      {
        internalType: "uint32",
        name: "autoDepositMinimumTimeUntilExpireInBps",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "autoDepositMinimumDuration",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "autoDepositMaxFeeInBasisPoints",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "minTimeUntilExpireInSeconds",
        type: "uint16",
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
    name: "getSubscriptionTriggerResult",
    outputs: [
      {
        internalType: "bool",
        name: "isSuccessful",
        type: "bool",
      },
      {
        internalType: "string",
        name: "failedReason",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "intervalsToAdd",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
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
        name: "customer",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint64[]",
        name: "subscriptionIds",
        type: "uint64[]",
      },
      {
        internalType: "bool",
        name: "sendToWallet",
        type: "bool",
      },
    ],
    name: "triggerAutoDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "totalDepositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        internalType: "uint64[]",
        name: "subscriptionIds",
        type: "uint64[]",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "useRadomBalanceForMeteredCharge",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "disableAutoDeposit",
            type: "bool",
          },
          {
            internalType: "uint16",
            name: "minimumTimeUntilExpireInBps",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "minimumDuration",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "maxFeeInBps",
            type: "uint16",
          },
        ],
        internalType: "struct Automation.DepositConfig",
        name: "depositConfig",
        type: "tuple",
      },
    ],
    name: "updateSubscriptionAutoDepositConfigs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600f5534801561001557600080fd5b50611a1b806100256000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063025715331461005c57806315e881fb146100895780635d47fc7c146100ad5780637b88c545146100c2578063e313e125146100d5575b600080fd5b61006f61006a3660046113b1565b610134565b604080519283526020830191909152015b60405180910390f35b61009c610097366004611442565b6105a1565b6040516100809594939291906114ad565b6100c06100bb3660046114eb565b6107ba565b005b6100c06100d036600461157b565b610902565b610103600c5461ffff600160301b820481169263ffffffff6201000084041692600160401b81048316921690565b6040805163ffffffff95861681529385166020850152919093169082015261ffff9091166060820152608001610080565b6000806002600f540361015a5760405163553e2b4560e11b815260040160405180910390fd5b6002600f55600084900361018157604051637e70cee760e11b815260040160405180910390fd5b6000805b858110156104415760006003818989858181106101a4576101a46115d7565b90506020020160208101906101b99190611442565b67ffffffffffffffff168152602081019190915260400160002080549091506001600160a01b038b8116600160381b90920416141580610211575060028101546001600160a01b038a81166401000000009092041614155b1561022f57604051630ebd8d1960e11b815260040160405180910390fd5b60008060008060006102678d8d8981811061024c5761024c6115d7565b90506020020160208101906102619190611442565b876109b7565b94509450945094509450846102c2578c8c88818110610288576102886115d7565b905060200201602081019061029d9190611442565b8460405163904c53bd60e01b81526004016102b99291906115ed565b60405180910390fd5b6102cc838b611626565b99506102d8818a611626565b98508186600101601c8282829054906101000a900463ffffffff166102fd919061163f565b82546101009290920a63ffffffff8181021990931691831602179091556001880154885460009850600160c01b820483169750600160a01b9091048216955061034c9450169150429050611663565b610356919061168c565b6103609190611663565b6001830154600384015491925061038e916001600160a01b03909116908c9061038990856116a0565b610d09565b808260010160188282829054906101000a900463ffffffff166103b1919061163f565b92506101000a81548163ffffffff021916908363ffffffff1602179055508082600101601c8282829054906101000a900463ffffffff166103f291906116b7565b92506101000a81548163ffffffff021916908363ffffffff16021790555081600301548161042091906116a0565b61042a9085611626565b935050508080610439906116d4565b915050610185565b506001600160a01b038089166000908152600a60209081526040808320938b16835292905220548190610475908590611626565b61047f9190611663565b6001600160a01b03808a166000908152600a60209081526040808320938c168352929052205583156104da576104c06001600160a01b038816893086610dcf565b6104d56001600160a01b038816893385610dcf565b610534565b6104fb88306104e98587611626565b6001600160a01b038b16929190610dcf565b336000908152600e602090815260408083206001600160a01b038b1684529091528120805484929061052e908490611626565b90915550505b866001600160a01b0316336001600160a01b0316896001600160a01b03167f9c47fafb4f19a7e100d2c81aa57615b71e8436561b9612e1d75497f750aab76a8989888860405161058794939291906116ed565b60405180910390a4506001600f5590969095509350505050565b67ffffffffffffffff811660009081526003602052604081206060908290819081906105cd87826109b7565b939950919750955093509150856105e85760009550506107b1565b60006105f48386611626565b600283015483546040516370a0823160e01b81526001600160a01b03600160381b9092048216600482015292935060009264010000000090920416906370a0823190602401602060405180830381865afa158015610656573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067a9190611744565b9050818110156106c757505060408051808201909152601b81527f496e73756666696369656e742057616c6c65742042616c616e6365000000000060208201526000965094506107b19050565b60028301548354604051636eb1769f60e11b8152600160381b9091046001600160a01b0390811660048301523060248301526000926401000000009004169063dd62ed3e90604401602060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107509190611744565b905082811015610797575050604080518082019091526016815275496e73756666696369656e7420416c6c6f77616e636560501b60208201526000975095506107b1915050565b505060408051602081019091526000815260019750955050505b91939590929450565b83600160f81b6107ca8282610e2f565b60005b848110156108f95760006003818888858181106107ec576107ec6115d7565b90506020020160208101906108019190611442565b67ffffffffffffffff168152602081019190915260400160002080549091506001600160a01b03898116600160381b909204161461085257604051630ebd8d1960e11b815260040160405180910390fd5b84600d6000898986818110610869576108696115d7565b905060200201602081019061087e9190611442565b67ffffffffffffffff16815260208101919091526040016000206108a28282611777565b905050876001600160a01b03167f06fe0c6d458b7bb229e71a998662174aa56123a47918cac4d6a8d869a89c448b866040516108de9190611850565b60405180910390a250806108f1816116d4565b9150506107cd565b50505050505050565b61090a610ece565b600c805467ffffffffffff00001916600160301b61ffff87811691820265ffffffff00001916929092176201000063ffffffff88169081029190911769ffff000000000000ffff1916600160401b87851690810261ffff19169190911793861693909317909355604080519182526020820193909352918201527fae3ffa31904232832e28578e14fec80b88cf399441d0a62ad616f2803b45157f9060600160405180910390a150505050565b600060606000806000806109ca88610f57565b9050806020015115610a1e57505060408051808201909152601881527f4175746f206465706f7369742069732064697361626c65640000000000000000602082015260009450925083915081905080610cff565b8654640100000000900460ff1680610a3e57508654600160301b900460ff165b15610a75576000806000806040518060600160405280602b8152602001611972602b91399291909550955095509550955050610cff565b600187015460009063ffffffff600160a01b8204811691610aa791600160e01b8204811691600160c01b90041661163f565b610ab290600161163f565b63ffffffff16610ac291906116a0565b8854610ad4919063ffffffff16611626565b9050804210610b1e57505060408051808201909152601481527314dd589cd8dc9a5c1d1a5bdb88195e1c1a5c995960621b6020820152600095509350849250829150819050610cff565b6001880154606083015160009163ffffffff600160a01b909104811691161015610b5e5750600188810154909450600160a01b900463ffffffff16610b83565b5060608201516001890154610b8090600160a01b900463ffffffff16826118cc565b94505b6003890154610b989063ffffffff87166116a0565b95506000610ba64284611663565b905060006127108363ffffffff16866040015161ffff16610bc791906116a0565b610bd1919061168c565b600c5490915061ffff16811015610beb5750600c5461ffff165b80821115610c295760008060008060405180608001604052806049815260200161199d60499139929190995099509950995099505050505050610cff565b600081866080015161ffff168484610c419190611663565b610c4b91906116a0565b610c55919061168c565b9050600080610c648b8461108d565b9150915081610cd257600080610c85610c7f6127108f61168c565b8661108d565b9150915081610cc95760008060008060405180606001604052806036815260200161193c603691399291909e509e509e509e509e5050505050505050505050610cff565b9950610ce19050565b610cde6127108261168c565b98505b505060408051602081019091526000815260019b5099505050505050505b9295509295909350565b600c54600090819061271090610d2a90600160501b900461ffff16856116a0565b610d34919061168c565b9050610d408184611663565b6001600160a01b038087166000908152600b85016020908152604080832093891683529290529081208054909190610d79908490611626565b9091555050600c8201546001600160a01b03600160601b90910481166000908152600b84016020908152604080832093881683529290529081208054839290610dc3908490611626565b90915550505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610e299085906110d8565b50505050565b6040516302a664eb60e11b81526001600160f01b0319821660048201526001600160a01b0383166024820152336044820152309063054cc9d690606401602060405180830381865afa158015610e89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ead91906118ef565b610eca5760405163061cbdd360e51b815260040160405180910390fd5b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b03163314610f555760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084016102b9565b565b6040805160a08082018352600080835260208084018290528385018290526060808501839052608080860184905267ffffffffffffffff88168452600d8352868420875195860188528486529285018490529584018390528301829052938201529091908154610100810460ff1615156020830152640100000000900463ffffffff1615610ff9578154640100000000900463ffffffff16606082015261100e565b600c5462010000900463ffffffff1660608201525b815462010000900461ffff161561103557815462010000900461ffff166040820152611049565b600c54600160301b900461ffff1660408201525b8154600160401b900461ffff1615611072578154600160401b900461ffff166080820152611086565b600c54600160401b900461ffff1660808201525b9392505050565b600080836000036110a457506001905060006110d1565b838302838582816110b7576110b7611676565b04146110ca5760008092509250506110d1565b6001925090505b9250929050565b600061112d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111af9092919063ffffffff16565b8051909150156111aa578080602001905181019061114b91906118ef565b6111aa5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102b9565b505050565b60606111be84846000856111c6565b949350505050565b6060824710156112275760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102b9565b600080866001600160a01b03168587604051611243919061190c565b60006040518083038185875af1925050503d8060008114611280576040519150601f19603f3d011682016040523d82523d6000602084013e611285565b606091505b5091509150611296878383876112a1565b979650505050505050565b60608315611310578251600003611309576001600160a01b0385163b6113095760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102b9565b50816111be565b6111be83838151156113255781518083602001fd5b8060405162461bcd60e51b81526004016102b99190611928565b80356001600160a01b038116811461135657600080fd5b919050565b60008083601f84011261136d57600080fd5b50813567ffffffffffffffff81111561138557600080fd5b6020830191508360208260051b85010111156110d157600080fd5b80151581146113ae57600080fd5b50565b6000806000806000608086880312156113c957600080fd5b6113d28661133f565b94506113e06020870161133f565b9350604086013567ffffffffffffffff8111156113fc57600080fd5b6114088882890161135b565b909450925050606086013561141c816113a0565b809150509295509295909350565b803567ffffffffffffffff8116811461135657600080fd5b60006020828403121561145457600080fd5b6110868261142a565b60005b83811015611478578181015183820152602001611460565b50506000910152565b6000815180845261149981602086016020860161145d565b601f01601f19169290920160200192915050565b851515815260a0602082015260006114c860a0830187611481565b60408301959095525063ffffffff92909216606083015260809091015292915050565b60008060008084860360e081121561150257600080fd5b61150b8661133f565b9450602086013567ffffffffffffffff81111561152757600080fd5b6115338882890161135b565b90955093505060a0603f198201121561154b57600080fd5b509295919450926040019150565b61ffff811681146113ae57600080fd5b63ffffffff811681146113ae57600080fd5b6000806000806080858703121561159157600080fd5b843561159c81611559565b935060208501356115ac81611569565b925060408501356115bc81611559565b915060608501356115cc81611559565b939692955090935050565b634e487b7160e01b600052603260045260246000fd5b67ffffffffffffffff831681526040602082015260006111be6040830184611481565b634e487b7160e01b600052601160045260246000fd5b8082018082111561163957611639611610565b92915050565b63ffffffff81811683821601908082111561165c5761165c611610565b5092915050565b8181038181111561163957611639611610565b634e487b7160e01b600052601260045260246000fd5b60008261169b5761169b611676565b500490565b808202811582820484141761163957611639611610565b63ffffffff82811682821603908082111561165c5761165c611610565b6000600182016116e6576116e6611610565b5060010190565b6060808252810184905260008560808301825b8781101561172f5767ffffffffffffffff61171a8461142a565b16825260209283019290910190600101611700565b50602084019590955250506040015292915050565b60006020828403121561175657600080fd5b5051919050565b6000813561163981611559565b6000813561163981611569565b8135611782816113a0565b815460ff19811691151560ff16918217835560208401356117a2816113a0565b61ff0090151560081b1661ffff19821683178117845560408501356117c681611559565b63ffff00008160101b1663ffff000019851663ffffffff1985161783171785555050505061181b6117f96060840161176a565b825467ffffffff00000000191660209190911b67ffffffff0000000016178255565b610eca61182a6080840161175d565b825469ffff0000000000000000191660409190911b69ffff000000000000000016178255565b60a08101823561185f816113a0565b151582526020830135611871816113a0565b15156020830152604083013561188681611559565b61ffff90811660408401526060840135906118a082611569565b63ffffffff82166060850152608085013591506118bc82611559565b8082166080850152505092915050565b600063ffffffff808416806118e3576118e3611676565b92169190910492915050565b60006020828403121561190157600080fd5b8151611086816113a0565b6000825161191e81846020870161145d565b9190910192915050565b602081526000611086602083018461148156fe4665652063616c63756c6174696f6e206f766572666c6f772e20546865206465706f736974416d6f756e7420697320746f6f20626967537562736372697074696f6e2069732073657420746f2063616e63656c6c6564206f72206578706972656454696d6520756e74696c20537562736372697074696f6e2045787069726174696f6e2069732067726561746572207468616e206d696e696d756d54696d65556e74696c457870697265a2646970667358221220bc2627958840e2af1917e190b9ac7b4af5f729c11b5df6467913cfa3d237803464736f6c63430008110033";

type AutomationFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutomationFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutomationFacet__factory extends ContractFactory {
  constructor(...args: AutomationFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AutomationFacet> {
    return super.deploy(overrides || {}) as Promise<AutomationFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AutomationFacet {
    return super.attach(address) as AutomationFacet;
  }
  override connect(signer: Signer): AutomationFacet__factory {
    return super.connect(signer) as AutomationFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutomationFacetInterface {
    return new utils.Interface(_abi) as AutomationFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutomationFacet {
    return new Contract(address, _abi, signerOrProvider) as AutomationFacet;
  }
}
