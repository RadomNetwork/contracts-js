/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUserAccessControl,
  IUserAccessControlInterface,
} from "../../../contracts/interfaces/IUserAccessControl";

const _abi = [
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
] as const;

export class IUserAccessControl__factory {
  static readonly abi = _abi;
  static createInterface(): IUserAccessControlInterface {
    return new utils.Interface(_abi) as IUserAccessControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUserAccessControl {
    return new Contract(address, _abi, signerOrProvider) as IUserAccessControl;
  }
}
