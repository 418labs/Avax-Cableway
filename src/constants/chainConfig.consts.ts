export type L1MessageContractConfig = {
  "message-format": string;
  settings?: {
    "reward-address": string;
  };
};

export type L1EndpointConfig = {
  "base-url": string;
};

export type L1Config = {
  "subnet-id": string;
  "blockchain-id": string;
  vm: string;
  "rpc-endpoint": L1EndpointConfig;
  "ws-endpoint": L1EndpointConfig;
  "message-contracts": Record<string, L1MessageContractConfig>;
};

export type L1SourceConfig = L1Config & {"message-contracts": Record<string, Required<L1MessageContractConfig>>};
export type L1DestConfig = Pick<L1Config, "subnet-id" | "blockchain-id" | "vm" | "rpc-endpoint" > & {"account-private-key": string};

export type RelayerConfig = {
  "log-level": string;
  "p-chain-api": L1EndpointConfig;
  "info-api": L1EndpointConfig;
  "source-blockchains": L1SourceConfig[];
  "destination-blockchains": L1DestConfig[];
}

export const L1_CHAINS_CONFIG: Record<string, L1Config> = {
    "11111111111111111111111111111111LpoYY": {
      "subnet-id": "11111111111111111111111111111111LpoYY",
      "blockchain-id": "yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp",
      "vm": "evm",
      "rpc-endpoint": {
        "base-url": "https://api.avax-test.network/ext/bc/C/rpc"
      },
      "ws-endpoint": {
        "base-url": "wss://api.avax-test.network/ext/bc/C/ws"
      },
      "message-contracts": {
        "0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf": {
          "message-format": "teleporter",
        }
      }
    },
    "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5": {
      "subnet-id": "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5",
      "blockchain-id": "2D8RG4UpSXbPbvPCAWppNJyqTG2i2CAXSkTgmTBBvs7GKNZjsY",
      "vm": "evm",
      "rpc-endpoint": {
        "base-url": "https://subnets.avax.network/dispatch/testnet/rpc"
      },
      "ws-endpoint": {
        "base-url": "wss://subnets.avax.network/dispatch/testnet/ws"
      },
      "message-contracts": {
        "0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf": {
          "message-format": "teleporter",
        }
      }
    }
};
