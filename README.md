# @electron/contracts

```sh
yarn add @electron/contracts
```

## Electron Network TypeScript Bundle

### Clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from "@electron/contracts"
const { ElectronNativePrediction } = contracts
```

Then each contract will have clients, for example for `ElectronNativePrediction`:

```ts
const {
	ElectronNativePredictionClient,
	ElectronNativePredictionMessageComposer,
	ElectronNativePredictionQueryClient
} = ElectronNativePrediction
```

## Credits

🛠 Built by Electron Protocol , based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Using CosmWasm TS Codegen:

-  [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
