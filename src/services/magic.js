import { Magic } from '@magic-sdk/react-native'
import getEnvVars from '../../env'
const { MAGIC_API_KEY } = getEnvVars()

const magic = new Magic(MAGIC_API_KEY, {
  network: 'rinkeby'
})

magic.preload()

export default magic
