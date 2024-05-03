/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Config, WalletInfo, ExecuteMsg, QueryMsg } from "./FuzioNativePrediction.types";
export declare abstract class FuzioNativePredictionExecuteMsgBuilder {
    static updateConfig: ({ config }: CamelCasedProperties<{
        config: Config;
    }>) => ExecuteMsg;
    static betBull: ({ amount, roundId }: CamelCasedProperties<{
        amount: string;
        round_id: string;
    }>) => ExecuteMsg;
    static betBear: ({ amount, roundId }: CamelCasedProperties<{
        amount: string;
        round_id: string;
    }>) => ExecuteMsg;
    static closeRound: () => ExecuteMsg;
    static collectWinnings: () => ExecuteMsg;
    static collectionWinningRound: ({ roundId }: CamelCasedProperties<{
        round_id: string;
    }>) => ExecuteMsg;
    static halt: () => ExecuteMsg;
    static resume: () => ExecuteMsg;
    static addAdmin: ({ newAdmin }: CamelCasedProperties<{
        new_admin: string;
    }>) => ExecuteMsg;
    static removeAdmin: ({ oldAdmin }: CamelCasedProperties<{
        old_admin: string;
    }>) => ExecuteMsg;
    static modifyDevWallet: ({ newDevWallets }: CamelCasedProperties<{
        new_dev_wallets: WalletInfo[];
    }>) => ExecuteMsg;
}
export declare abstract class FuzioNativePredictionQueryMsgBuilder {
    static config: () => QueryMsg;
    static status: () => QueryMsg;
    static myCurrentPosition: ({ address }: CamelCasedProperties<{
        address: string;
    }>) => QueryMsg;
    static finishedRound: ({ roundId }: CamelCasedProperties<{
        round_id: string;
    }>) => QueryMsg;
    static myGameList: ({ limit, player, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        player: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static myPendingReward: ({ player }: CamelCasedProperties<{
        player: string;
    }>) => QueryMsg;
    static myPendingRewardRounds: ({ player }: CamelCasedProperties<{
        player: string;
    }>) => QueryMsg;
    static getUsersPerRound: ({ limit, roundId, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        round_id: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static myPendingRewardRound: ({ player, roundId }: CamelCasedProperties<{
        player: string;
        round_id: string;
    }>) => QueryMsg;
    static getClaimInfoPerRound: ({ limit, roundId, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        round_id: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static getClaimInfoByUser: ({ limit, player, startAfter }: CamelCasedProperties<{
        limit?: number | null | undefined;
        player: string;
        start_after?: string | null | undefined;
    }>) => QueryMsg;
    static totalSpent: ({ player }: CamelCasedProperties<{
        player: string;
    }>) => QueryMsg;
    static getAdmins: () => QueryMsg;
}
