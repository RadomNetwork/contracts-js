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

export declare namespace Billing {
  export type ProductStruct = {
    productType: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type ProductStructOutput = [number, string] & {
    productType: number;
    data: string;
  };

  export type OrderStruct = {
    nonce: PromiseOrValue<BigNumberish>;
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
    products: Billing.ProductStruct[];
  };

  export type OrderStructOutput = [
    BigNumber,
    string,
    string,
    Billing.ProductStructOutput[]
  ] & {
    nonce: BigNumber;
    customer: string;
    seller: string;
    products: Billing.ProductStructOutput[];
  };

  export type PaymentStruct = {
    nonce: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    token: PromiseOrValue<string>;
    customer: PromiseOrValue<string>;
    seller: PromiseOrValue<string>;
  };

  export type PaymentStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    nonce: BigNumber;
    price: BigNumber;
    token: string;
    customer: string;
    seller: string;
  };

  export type UpdateAddOnsOrderStruct = {
    subscriptionId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    addOns: PromiseOrValue<BigNumberish>[];
  };

  export type UpdateAddOnsOrderStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber[]
  ] & { subscriptionId: BigNumber; price: BigNumber; addOns: BigNumber[] };
}

export interface IBillingInterface extends utils.Interface {
  functions: {
    "generateOrderId((uint256,address,address,(uint32,bytes)[]))": FunctionFragment;
    "order((uint256,address,address,(uint32,bytes)[]),bool)": FunctionFragment;
    "pay((uint256,uint256,address,address,address),bool)": FunctionFragment;
    "replaceOrderConfig((uint256,address,address,(uint32,bytes)[]))": FunctionFragment;
    "updateAddOnsOrder((uint64,uint256,uint64[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "generateOrderId"
      | "order"
      | "pay"
      | "replaceOrderConfig"
      | "updateAddOnsOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateOrderId",
    values: [Billing.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "order",
    values: [Billing.OrderStruct, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [Billing.PaymentStruct, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "replaceOrderConfig",
    values: [Billing.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAddOnsOrder",
    values: [Billing.UpdateAddOnsOrderStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "order", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "replaceOrderConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAddOnsOrder",
    data: BytesLike
  ): Result;

  events: {
    "OrderConfigUpdated(bytes32)": EventFragment;
    "OrderPurchased(bytes32,tuple)": EventFragment;
    "PaymentSuccessful(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderConfigUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentSuccessful"): EventFragment;
}

export interface OrderConfigUpdatedEventObject {
  orderId: string;
}
export type OrderConfigUpdatedEvent = TypedEvent<
  [string],
  OrderConfigUpdatedEventObject
>;

export type OrderConfigUpdatedEventFilter =
  TypedEventFilter<OrderConfigUpdatedEvent>;

export interface OrderPurchasedEventObject {
  orderId: string;
  orderData: Billing.OrderStructOutput;
}
export type OrderPurchasedEvent = TypedEvent<
  [string, Billing.OrderStructOutput],
  OrderPurchasedEventObject
>;

export type OrderPurchasedEventFilter = TypedEventFilter<OrderPurchasedEvent>;

export interface PaymentSuccessfulEventObject {
  paymentId: string;
}
export type PaymentSuccessfulEvent = TypedEvent<
  [string],
  PaymentSuccessfulEventObject
>;

export type PaymentSuccessfulEventFilter =
  TypedEventFilter<PaymentSuccessfulEvent>;

export interface IBilling extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBillingInterface;

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
    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { orderId: string }>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    replaceOrderConfig(
      order: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  generateOrderId(
    order: Billing.OrderStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  order(
    order: Billing.OrderStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pay(
    payment: Billing.PaymentStruct,
    fromRadomBalance: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  replaceOrderConfig(
    order: Billing.OrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAddOnsOrder(
    updateData: Billing.UpdateAddOnsOrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    replaceOrderConfig(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OrderConfigUpdated(bytes32)"(
      orderId?: PromiseOrValue<BytesLike> | null
    ): OrderConfigUpdatedEventFilter;
    OrderConfigUpdated(
      orderId?: PromiseOrValue<BytesLike> | null
    ): OrderConfigUpdatedEventFilter;

    "OrderPurchased(bytes32,tuple)"(
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null
    ): OrderPurchasedEventFilter;
    OrderPurchased(
      orderId?: PromiseOrValue<BytesLike> | null,
      orderData?: null
    ): OrderPurchasedEventFilter;

    "PaymentSuccessful(bytes32)"(
      paymentId?: null
    ): PaymentSuccessfulEventFilter;
    PaymentSuccessful(paymentId?: null): PaymentSuccessfulEventFilter;
  };

  estimateGas: {
    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    replaceOrderConfig(
      order: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateOrderId(
      order: Billing.OrderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    order(
      order: Billing.OrderStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pay(
      payment: Billing.PaymentStruct,
      fromRadomBalance: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    replaceOrderConfig(
      order: Billing.OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAddOnsOrder(
      updateData: Billing.UpdateAddOnsOrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
