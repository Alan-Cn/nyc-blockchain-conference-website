import { FC } from 'react';
import styles from "./styles.module.scss"
import '@rainbow-me/rainbowkit/styles.css'
import { darkTheme, getDefaultWallets,RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit'

const {chains,provider} = configureChains([mainnet],[publicProvider()]);
const {connectors} = getDefaultWallets({appName:'my rainbowkit app',chains});
const wagmiClient = createClient({
  autoConnect:true,
  connectors,
  provider
})
const ConnectBut:FC=({}) =>{
  return (
    <div className={styles.ConnectBut}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
          <ConnectButton  chainStatus='name' showBalance={false}/>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>    
    )
}
export default ConnectBut;