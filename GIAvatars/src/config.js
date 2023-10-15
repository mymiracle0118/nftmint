const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "D3Ds";
const description = "D3Ds are the life source for rejects. Without D3Ds a reject cannot survive in the afterverse. D3Ds help rejects evolve into higher powered beings called Undeads. Dead rejects wander the solana afterverse in search of D3Ds, finding it means surviving and evolving.";
const baseUri = "ipfs://NewUriToReplace";
const solanaMetadata = {
  symbol: "Pill",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: null,
  creators: [
    {
      address: "devAa6UvUMX9G2Q5sSLLkMYYunAdarCPiqAtAeZcyVR",
      share: 100,
    },
  ],
  collection: {
    name: "D3Ds",
    family: "D3Ds"
  }
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 3941,
    layersOrder: [
      { name: "Background" },
      // { name: "Pedestal" },
      // { name: "Skins" },
      // { name: "Head" },
      // { name: "Clothes" },
      // { name: "Neck" },
      // { name: "Claws" },
      // { name : "Accessories"},
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1024,
  height: 1024,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
