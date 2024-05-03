/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Addr, Decimal, Uint128, InstantiateMsg, WalletInfo, ExecuteMsg, Action, Expiration, Timestamp, Uint64, Config, QueryMsg } from "./FuzioIDOInfo.types";
export interface FuzioIDOInfoMsg {
  contractAddress: string;
  sender: string;
  updateConfig: ({
    newConfig
  }: {
    newConfig: Config;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateOwnership: (action: Action, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class FuzioIDOInfoMsgComposer implements FuzioIDOInfoMsg {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateConfig = this.updateConfig.bind(this);
    this.updateOwnership = this.updateOwnership.bind(this);
  }

  updateConfig = ({
    newConfig
  }: {
    newConfig: Config;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            new_config: newConfig
          }
        })),
        funds: _funds
      })
    };
  };
  updateOwnership = (action: Action, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_ownership: action
        })),
        funds: _funds
      })
    };
  };
}