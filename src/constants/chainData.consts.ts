export type L1Data = {
  id: string;
  logoUri: string;
  name: string;
};

export const L1_CHAINS: Record<string, L1Data> = {
  "11111111111111111111111111111111LpoYY": {
    id: "11111111111111111111111111111111LpoYY",
    logoUri: "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/3e4b8ff10b69bfa31e70080a4b142cd0/avalanche-avax-logo.svg",
    name:"Avalanche C-Chain (Testnet)",
  },
  "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5": {
    id: "7WtoAMPhrmh5KosDUsFL9yTcvw7YSxiKHPpdfs4JsgW47oZT5",
    logoUri: "https://images.ctfassets.net/gcj8jwzm6086/60XrKdf99PqQKrHiuYdwTE/908622f5204311dbb11be9c6008ead44/Dispatch_Subnet_Logo.png",
    name:"Dispatch L1 Testnet",
  },
};
