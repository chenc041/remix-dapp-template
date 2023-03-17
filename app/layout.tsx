import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { WALLET_CONNECT_PROJECT_ID } from "~/constants";
import { mainnet } from "wagmi/chains";
import { w3mProvider } from "@web3modal/ethereum";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

export interface LayoutProps {
	children: React.ReactNode;
}

const projectId = WALLET_CONNECT_PROJECT_ID;
const chains = [mainnet];
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const client = createClient({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({
			chains,
		}),
		new WalletConnectConnector({
			chains,
			options: {
				projectId,
			},
		}),
	],
	provider,
});

export const Layout = (props: LayoutProps) => {
	const { children } = props;
	return (
		<>
			<WagmiConfig client={client}>{children}</WagmiConfig>
		</>
	);
};
