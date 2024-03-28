const { Web3Provider } = require('@ethersproject/providers');
const { useWeb3React } = require('@web3-react/core');
const { InjectedConnector } = require('@web3-react/injected-connector');

function ConnectAndSwitchNetwork() {
    const { activate, active, chainId, setError } = useWeb3React<Web3Provider>('');
    const injectedConnector = new InjectedConnector({ supportedChainIds: [80001] }); // 80001 is the chain ID for Polygon Mumbai

    async function connectAndSwitch() {
        try {
            await activate(injectedConnector);

            if (active) {
                console.log('Connected to MetaMask:', chainId);

                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }], 
                });

                return true; // Successfully connected and switched network
            }
        } catch (error) {
            console.error('Connection failed:', error);
            return false; // Failed to connect or switch network
        }
    }

    return {
        connectAndSwitch
    };
}

module.exports = ConnectAndSwitchNetwork;
