import { RelayerConfig, L1_CHAINS_CONFIG, L1MessageContractConfig } from '@/constants';

function patchMessageContracts(
  messageContracts: Record<string, L1MessageContractConfig>,
  rewardAddress: string
): Record<string, Required<L1MessageContractConfig>> {
  return Object.fromEntries(Object.entries(messageContracts).map(([key, value]) => {
    return [key, {
      ...value,
      settings: {
        "reward-address": rewardAddress,
      }
    }];
  }));
}

export function buildConfigJson({
  sourceChainIds,
  destinationChainIds,
  rewardAddress,
  accountPrivateKey,
}: {
  sourceChainIds: string[];
  destinationChainIds: string[];
  rewardAddress: string;
  accountPrivateKey: string;
}): RelayerConfig {
  return {
    "log-level": "info",
    "p-chain-api": {
      "base-url": "https://api.avax-test.network"
    },
    "info-api": {
      "base-url": "https://api.avax-test.network"
    },
    "source-blockchains": sourceChainIds.map((sourceChainId) => {
      const sourceChainConfig = L1_CHAINS_CONFIG[sourceChainId];
      if (!sourceChainConfig) {
        throw new Error(`Source chain with id ${sourceChainId} not found`);
      }
      return {
        ...sourceChainConfig,
        "message-contracts": patchMessageContracts(sourceChainConfig["message-contracts"], rewardAddress),
      };
    }),
    "destination-blockchains": destinationChainIds.map((destinationChainId) => {
      const destinationChainConfig = L1_CHAINS_CONFIG[destinationChainId];
      if (!destinationChainConfig) {
        throw new Error(`Destination chain with id ${destinationChainId} not found`);
      }
      return {
        ...destinationChainConfig,
        "account-private-key": accountPrivateKey,
      };
    }),
  }
}
