/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UserAccessControlFacetInterface extends utils.Interface {
  functions: {
    "assignRole(address,bytes32,address)": FunctionFragment;
    "changeRolePermissions(address,bytes32,bytes2)": FunctionFragment;
    "createRole(address,bytes32,bytes2)": FunctionFragment;
    "createRoles(address,bytes32[],bytes2[])": FunctionFragment;
    "deleteRole(address,bytes32)": FunctionFragment;
    "getOrganizationRoleNames(address)": FunctionFragment;
    "getOrganizationRolePermissions(address,bytes32)": FunctionFragment;
    "getOrganizationRoleUsers(address,bytes32)": FunctionFragment;
    "getPaginatedUserOrganizationIds(address,uint256,uint256)": FunctionFragment;
    "getRoleNameForUserByOrganizationId(address,address)": FunctionFragment;
    "hasPermissions(bytes2,address,address)": FunctionFragment;
    "unassignRole(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assignRole",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRolePermissions",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createRole",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createRoles",
    values: [string, BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteRole",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrganizationRoleNames",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrganizationRolePermissions",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrganizationRoleUsers",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaginatedUserOrganizationIds",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleNameForUserByOrganizationId",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPermissions",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unassignRole",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "assignRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeRolePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrganizationRoleNames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrganizationRolePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrganizationRoleUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaginatedUserOrganizationIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleNameForUserByOrganizationId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unassignRole",
    data: BytesLike
  ): Result;

  events: {
    "RoleAssigned(address,address,bytes32)": EventFragment;
    "RoleCreated(address,bytes32,bytes2)": EventFragment;
    "RoleDeleted(address,bytes32)": EventFragment;
    "RoleUnassigned(address,address)": EventFragment;
    "RoleUpdated(address,bytes32,bytes2)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAssigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleUnassigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleUpdated"): EventFragment;
}

export type RoleAssignedEvent = TypedEvent<
  [string, string, string],
  { orgId: string; user: string; roleName: string }
>;

export type RoleAssignedEventFilter = TypedEventFilter<RoleAssignedEvent>;

export type RoleCreatedEvent = TypedEvent<
  [string, string, string],
  { orgId: string; roleName: string; permissions: string }
>;

export type RoleCreatedEventFilter = TypedEventFilter<RoleCreatedEvent>;

export type RoleDeletedEvent = TypedEvent<
  [string, string],
  { orgId: string; roleName: string }
>;

export type RoleDeletedEventFilter = TypedEventFilter<RoleDeletedEvent>;

export type RoleUnassignedEvent = TypedEvent<
  [string, string],
  { orgId: string; user: string }
>;

export type RoleUnassignedEventFilter = TypedEventFilter<RoleUnassignedEvent>;

export type RoleUpdatedEvent = TypedEvent<
  [string, string, string],
  { orgId: string; roleName: string; permissions: string }
>;

export type RoleUpdatedEventFilter = TypedEventFilter<RoleUpdatedEvent>;

export interface UserAccessControlFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserAccessControlFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    assignRole(
      orgId: string,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeRolePermissions(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRole(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createRoles(
      orgId: string,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteRole(
      orgId: string,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getOrganizationRoleNames(
      orgId: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getOrganizationRolePermissions(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOrganizationRoleUsers(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPaginatedUserOrganizationIds(
      user: string,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    getRoleNameForUserByOrganizationId(
      user: string,
      orgId: string,
      overrides?: CallOverrides
    ): Promise<[string] & { roleName: string }>;

    hasPermissions(
      permissionMask: BytesLike,
      orgId: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unassignRole(
      orgId: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  assignRole(
    orgId: string,
    roleName: BytesLike,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeRolePermissions(
    orgId: string,
    roleName: BytesLike,
    permissions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRole(
    orgId: string,
    roleName: BytesLike,
    permissions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createRoles(
    orgId: string,
    roleNames: BytesLike[],
    permissions: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteRole(
    orgId: string,
    roleName: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getOrganizationRoleNames(
    orgId: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getOrganizationRolePermissions(
    orgId: string,
    roleName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrganizationRoleUsers(
    orgId: string,
    roleName: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPaginatedUserOrganizationIds(
    user: string,
    offset: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber]>;

  getRoleNameForUserByOrganizationId(
    user: string,
    orgId: string,
    overrides?: CallOverrides
  ): Promise<string>;

  hasPermissions(
    permissionMask: BytesLike,
    orgId: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unassignRole(
    orgId: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assignRole(
      orgId: string,
      roleName: BytesLike,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRolePermissions(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createRole(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createRoles(
      orgId: string,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    deleteRole(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getOrganizationRoleNames(
      orgId: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getOrganizationRolePermissions(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrganizationRoleUsers(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPaginatedUserOrganizationIds(
      user: string,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    getRoleNameForUserByOrganizationId(
      user: string,
      orgId: string,
      overrides?: CallOverrides
    ): Promise<string>;

    hasPermissions(
      permissionMask: BytesLike,
      orgId: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unassignRole(
      orgId: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RoleAssigned(address,address,bytes32)"(
      orgId?: string | null,
      user?: string | null,
      roleName?: null
    ): RoleAssignedEventFilter;
    RoleAssigned(
      orgId?: string | null,
      user?: string | null,
      roleName?: null
    ): RoleAssignedEventFilter;

    "RoleCreated(address,bytes32,bytes2)"(
      orgId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleCreatedEventFilter;
    RoleCreated(
      orgId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleCreatedEventFilter;

    "RoleDeleted(address,bytes32)"(
      orgId?: string | null,
      roleName?: null
    ): RoleDeletedEventFilter;
    RoleDeleted(orgId?: string | null, roleName?: null): RoleDeletedEventFilter;

    "RoleUnassigned(address,address)"(
      orgId?: string | null,
      user?: string | null
    ): RoleUnassignedEventFilter;
    RoleUnassigned(
      orgId?: string | null,
      user?: string | null
    ): RoleUnassignedEventFilter;

    "RoleUpdated(address,bytes32,bytes2)"(
      orgId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleUpdatedEventFilter;
    RoleUpdated(
      orgId?: string | null,
      roleName?: null,
      permissions?: null
    ): RoleUpdatedEventFilter;
  };

  estimateGas: {
    assignRole(
      orgId: string,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeRolePermissions(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRole(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createRoles(
      orgId: string,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteRole(
      orgId: string,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getOrganizationRoleNames(
      orgId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrganizationRolePermissions(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrganizationRoleUsers(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaginatedUserOrganizationIds(
      user: string,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleNameForUserByOrganizationId(
      user: string,
      orgId: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPermissions(
      permissionMask: BytesLike,
      orgId: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unassignRole(
      orgId: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assignRole(
      orgId: string,
      roleName: BytesLike,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeRolePermissions(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRole(
      orgId: string,
      roleName: BytesLike,
      permissions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createRoles(
      orgId: string,
      roleNames: BytesLike[],
      permissions: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteRole(
      orgId: string,
      roleName: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getOrganizationRoleNames(
      orgId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrganizationRolePermissions(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrganizationRoleUsers(
      orgId: string,
      roleName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaginatedUserOrganizationIds(
      user: string,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleNameForUserByOrganizationId(
      user: string,
      orgId: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPermissions(
      permissionMask: BytesLike,
      orgId: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unassignRole(
      orgId: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
