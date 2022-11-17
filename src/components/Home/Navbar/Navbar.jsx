import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast from 'react-hot-toast';
import { getExplorer } from '../../../helpers/networks';
// import siteLogo from '../../../assets/logo.png';
import './Navbar.css';
import console from 'console-browserify';

const Navbar = ({ userType }) => {
  let navigate = useNavigate();
  const { toastStyles, userWalletBalance, getEllipsisTxt } = useContext(CharityContext);
  const { authenticate, isAuthenticated, logout, user, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const hideElement = { display: 'none' };
  const showElement = { display: 'block' };

  // NGOs = Employees & DONORs = HR
  const connectUserWallet = async () => {
    if (!isAuthenticated) {
      try {
        authenticate().then(async (u) => {
          const wallet = u?.get('ethAddress');

          const options = {
            chain: 'mumbai',
            address: wallet,
            token_address: '0x7Cc9c12819d58eF2518Fd14cDAba7968d1ad60f7',
          };
          const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
          const _hasNFT = polygonNFTs.result.length > 0;

          if ((_hasNFT && userType === 'HR') || (!_hasNFT && userType === 'EMPLOYEE')) {
            toast.success('Wallet Successfully Connected!', toastStyles);
          } else {
            await logout();
            toast.error('Retry using Appropriate Wallet!', toastStyles);
          }
        });
      } catch (error) {
        toast.error('Some Error Occured!', toastStyles);
      }
    }
  };

  return (
    <>
      <nav className="app__navbar flex__center section__padding">
        <h1
          onClick={() => {
            logout();
            navigate('/');
          }}
          style={{ padding: '1rem', cursor: 'pointer' }}
        >
          SMART PAYROLLS
        </h1>
        <ul>
          {userType && isAuthenticated && account && (
            <>
              <li>
                <a
                  href={`${getExplorer('0x13881')}/address/${account}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Polyscan
                </a>
              </li>
              <li>Balance: {userWalletBalance} MATIC</li>
            </>
          )}
          <li
            onClick={() => navigate('/dashboard/hr')}
            style={userType ? hideElement : showElement}
          >
            HR Dashboard
          </li>
          <li
            onClick={() => navigate('/dashboard/employee')}
            style={userType ? hideElement : showElement}
          >
            Employee Dashboard
          </li>

          {userType && !isAuthenticated && (
            <li onClick={() => connectUserWallet()}>Connect Wallet</li>
          )}
          {userType && isAuthenticated && (
            <>
              <li>
                {userType} :{' '}
                <span style={{ fontWeight: '500' }}>{getEllipsisTxt(user.get('ethAddress'))}</span>
              </li>
              <li
                onClick={async () => {
                  toast.error('Wallet Disconnected!', toastStyles);
                  await logout();
                }}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
