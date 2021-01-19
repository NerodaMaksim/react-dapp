import * as React from 'react';
import './style.scss';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { MetaMaskLogo } from './MetaMaskLogo';

export const injected = new InjectedConnector({supportedChainIds: [1, 2, 3, 4, 5, 42]});

export const MetaMaskButton = () => {
    const {
        account,
        activate,
        connector,
        error,
    } = useWeb3ReactCore<Web3Provider>();   
    const [activatingConnector, setActivatingConnector] = React.useState<any>();


    const handleConnectWallet = React.useCallback(() => {
        if (account) {
            window.console.log('[MetaMask] - successfully connected');
        } else {
            setActivatingConnector(injected);
            activate(injected);
        }
    }, [account, activate]);

    React.useEffect(() => {
        if (activatingConnector &&
            activatingConnector === connector &&
            account
            ){
                window.console.log('[MetaMask] - successfully connected');
                setActivatingConnector(undefined);
            }
    }, [activatingConnector, connector, account]);

    React.useEffect(() => {
        if (!!error) {
            window.console.log('[MetaMask] - something went wrong!');
        }
        
    }, [error]);

    return (
        <div className="pg-metamask">
            <MetaMaskLogo
                className="pg-metamask__logo-icon"
                onClick={handleConnectWallet}
                />
            {account ? (
                <span className="pg-metamask__account-connected">Account address: <span>{account}</span></span>
            ) : (
                <span className="pg-metamask__account-connected">No connected accounts</span>
            )}
        </div>
    )
}