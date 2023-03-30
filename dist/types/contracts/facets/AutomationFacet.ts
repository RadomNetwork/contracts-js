/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Automation {
  export type DepositConfigStruct = {
    useRadomBalanceForMeteredCharge: PromiseOrValue<boolean>;
    disableAutoDeposit: PromiseOrValue<boolean>;
    minimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>;
    minimumDuration: PromiseOrValue<BigNumberish>;
    maxFeeInBps: PromiseOrValue<BigNumberish>;
  };

  export type DepositConfigStructOutput = [
    boolean,
    boolean,
    number,
    number,
    number
  ] & {
    useRadomBalanceForMeteredCharge: boolean;
    disableAutoDeposit: boolean;
    minimumTimeUntilExpireInBps: number;
    minimumDuration: number;
    maxFeeInBps: number;
  };
}

export interface AutomationFacetInterface extends utils.Interface {
  functions: {
    "changeAutomationValues(uint16,uint32,uint16,uint16)": FunctionFragment;
    "getDefaultValues()": FunctionFragment;
    "getSubscriptionTriggerResult(uint64)": FunctionFragment;
    "triggerAutoDeposit(address,address,uint64[],bool)": FunctionFragment;
    "updateSubscriptionAutoDepositConfigs(address,uint64[],(bool,bool,uint16,uint32,uint16))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeAutomationValues"
      | "getDefaultValues"
      | "getSubscriptionTriggerResult"
      | "triggerAutoDeposit"
      | "updateSubscriptionAutoDepositConfigs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeAutomationValues",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultValues",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptionTriggerResult",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerAutoDeposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSubscriptionAutoDepositConfigs",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      Automation.DepositConfigStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeAutomationValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptionTriggerResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerAutoDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSubscriptionAutoDepositConfigs",
    data: BytesLike
  ): Result;

  events: {
    "AutoDepositConfigDeleted(address)": EventFragment;
    "AutoDepositConfigUpdated(address,tuple)": EventFragment;
    "AutoDepositDefaultValuesUpdated(uint32,uint32,uint32)": EventFragment;
    "AutoDepositTriggered(address,address,address,uint64[],uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AutoDepositConfigDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AutoDepositConfigUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AutoDepositDefaultValuesUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AutoDepositTriggered"): EventFragment;
}

export interface AutoDepositConfigDeletedEventObject {
  customer: string;
}
export type AutoDepositConfigDeletedEvent = TypedEvent<
  [string],
  AutoDepositConfigDeletedEventObject
>;

export type AutoDepositConfigDeletedEventFilter =
  TypedEventFilter<AutoDepositConfigDeletedEvent>;

export interface AutoDepositConfigUpdatedEventObject {
  customer: string;
  depositConfig: Automation.DepositConfigStructOutput;
}
export type AutoDepositConfigUpdatedEvent = TypedEvent<
  [string, Automation.DepositConfigStructOutput],
  AutoDepositConfigUpdatedEventObject
>;

export type AutoDepositConfigUpdatedEventFilter =
  TypedEventFilter<AutoDepositConfigUpdatedEvent>;

export interface AutoDepositDefaultValuesUpdatedEventObject {
  minimumTimeUntilExpire: number;
  minimumDuration: number;
  maxFeeInBasisPoints: number;
}
export type AutoDepositDefaultValuesUpdatedEvent = TypedEvent<
  [number, number, number],
  AutoDepositDefaultValuesUpdatedEventObject
>;

export type AutoDepositDefaultValuesUpdatedEventFilter =
  TypedEventFilter<AutoDepositDefaultValuesUpdatedEvent>;

export interface AutoDepositTriggeredEventObject {
  customer: string;
  triggeredBy: string;
  token: string;
  subscriptionIds: BigNumber[];
  amount: BigNumber;
  feeAmount: BigNumber;
}
export type AutoDepositTriggeredEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber, BigNumber],
  AutoDepositTriggeredEventObject
>;

export type AutoDepositTriggeredEventFilter =
  TypedEventFilter<AutoDepositTriggeredEvent>;

export interface AutomationFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AutomationFacetInterface;

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
    changeAutomationValues(
      autoDepositMinimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>,
      autoDepositMinimumDuration: PromiseOrValue<BigNumberish>,
      autoDepositMaxFeeInBasisPoints: PromiseOrValue<BigNumberish>,
      minTimeUntilExpireInSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDefaultValues(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        autoDepositMinimumTimeUntilExpireInBps: number;
        autoDepositMinimumDuration: number;
        autoDepositMaxFeeInBasisPoints: number;
        minTimeUntilExpireInSeconds: number;
      }
    >;

    getSubscriptionTriggerResult(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, number, BigNumber] & {
        isSuccessful: boolean;
        failedReason: string;
        depositAmount: BigNumber;
        intervalsToAdd: number;
        feeAmount: BigNumber;
      }
    >;

    triggerAutoDeposit(
      customer: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      sendToWallet: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateSubscriptionAutoDepositConfigs(
      customer: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      depositConfig: Automation.DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeAutomationValues(
    autoDepositMinimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>,
    autoDepositMinimumDuration: PromiseOrValue<BigNumberish>,
    autoDepositMaxFeeInBasisPoints: PromiseOrValue<BigNumberish>,
    minTimeUntilExpireInSeconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDefaultValues(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number] & {
      autoDepositMinimumTimeUntilExpireInBps: number;
      autoDepositMinimumDuration: number;
      autoDepositMaxFeeInBasisPoints: number;
      minTimeUntilExpireInSeconds: number;
    }
  >;

  getSubscriptionTriggerResult(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, number, BigNumber] & {
      isSuccessful: boolean;
      failedReason: string;
      depositAmount: BigNumber;
      intervalsToAdd: number;
      feeAmount: BigNumber;
    }
  >;

  triggerAutoDeposit(
    customer: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    subscriptionIds: PromiseOrValue<BigNumberish>[],
    sendToWallet: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateSubscriptionAutoDepositConfigs(
    customer: PromiseOrValue<string>,
    subscriptionIds: PromiseOrValue<BigNumberish>[],
    depositConfig: Automation.DepositConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeAutomationValues(
      autoDepositMinimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>,
      autoDepositMinimumDuration: PromiseOrValue<BigNumberish>,
      autoDepositMaxFeeInBasisPoints: PromiseOrValue<BigNumberish>,
      minTimeUntilExpireInSeconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDefaultValues(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number] & {
        autoDepositMinimumTimeUntilExpireInBps: number;
        autoDepositMinimumDuration: number;
        autoDepositMaxFeeInBasisPoints: number;
        minTimeUntilExpireInSeconds: number;
      }
    >;

    getSubscriptionTriggerResult(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, number, BigNumber] & {
        isSuccessful: boolean;
        failedReason: string;
        depositAmount: BigNumber;
        intervalsToAdd: number;
        feeAmount: BigNumber;
      }
    >;

    triggerAutoDeposit(
      customer: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      sendToWallet: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalDepositAmount: BigNumber;
        totalFeeAmount: BigNumber;
      }
    >;

    updateSubscriptionAutoDepositConfigs(
      customer: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      depositConfig: Automation.DepositConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AutoDepositConfigDeleted(address)"(
      customer?: PromiseOrValue<string> | null
    ): AutoDepositConfigDeletedEventFilter;
    AutoDepositConfigDeleted(
      customer?: PromiseOrValue<string> | null
    ): AutoDepositConfigDeletedEventFilter;

    "AutoDepositConfigUpdated(address,tuple)"(
      customer?: PromiseOrValue<string> | null,
      depositConfig?: null
    ): AutoDepositConfigUpdatedEventFilter;
    AutoDepositConfigUpdated(
      customer?: PromiseOrValue<string> | null,
      depositConfig?: null
    ): AutoDepositConfigUpdatedEventFilter;

    "AutoDepositDefaultValuesUpdated(uint32,uint32,uint32)"(
      minimumTimeUntilExpire?: null,
      minimumDuration?: null,
      maxFeeInBasisPoints?: null
    ): AutoDepositDefaultValuesUpdatedEventFilter;
    AutoDepositDefaultValuesUpdated(
      minimumTimeUntilExpire?: null,
      minimumDuration?: null,
      maxFeeInBasisPoints?: null
    ): AutoDepositDefaultValuesUpdatedEventFilter;

    "AutoDepositTriggered(address,address,address,uint64[],uint256,uint256)"(
      customer?: PromiseOrValue<string> | null,
      triggeredBy?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      subscriptionIds?: null,
      amount?: null,
      feeAmount?: null
    ): AutoDepositTriggeredEventFilter;
    AutoDepositTriggered(
      customer?: PromiseOrValue<string> | null,
      triggeredBy?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      subscriptionIds?: null,
      amount?: null,
      feeAmount?: null
    ): AutoDepositTriggeredEventFilter;
  };

  estimateGas: {
    changeAutomationValues(
      autoDepositMinimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>,
      autoDepositMinimumDuration: PromiseOrValue<BigNumberish>,
      autoDepositMaxFeeInBasisPoints: PromiseOrValue<BigNumberish>,
      minTimeUntilExpireInSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDefaultValues(overrides?: CallOverrides): Promise<BigNumber>;

    getSubscriptionTriggerResult(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    triggerAutoDeposit(
      customer: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      sendToWallet: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateSubscriptionAutoDepositConfigs(
      customer: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      depositConfig: Automation.DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeAutomationValues(
      autoDepositMinimumTimeUntilExpireInBps: PromiseOrValue<BigNumberish>,
      autoDepositMinimumDuration: PromiseOrValue<BigNumberish>,
      autoDepositMaxFeeInBasisPoints: PromiseOrValue<BigNumberish>,
      minTimeUntilExpireInSeconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDefaultValues(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubscriptionTriggerResult(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    triggerAutoDeposit(
      customer: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      sendToWallet: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateSubscriptionAutoDepositConfigs(
      customer: PromiseOrValue<string>,
      subscriptionIds: PromiseOrValue<BigNumberish>[],
      depositConfig: Automation.DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
