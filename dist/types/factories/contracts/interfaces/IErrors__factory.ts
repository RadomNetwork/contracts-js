/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IErrors,
  IErrorsInterface,
} from "../../../contracts/interfaces/IErrors";

const _abi = [
  {
    inputs: [],
    name: "ChargeIntervalInvalid",
    type: "error",
  },
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
    name: "NoPermission",
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
    name: "PricingSelectionInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ProductHasNoPrice",
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
] as const;

export class IErrors__factory {
  static readonly abi = _abi;
  static createInterface(): IErrorsInterface {
    return new utils.Interface(_abi) as IErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IErrors {
    return new Contract(address, _abi, signerOrProvider) as IErrors;
  }
}
