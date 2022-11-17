import React,{ useEffect, useContext, useState } from 'react';
import { useMoralis, useMoralisQuery, useWeb3ExecuteFunction } from 'react-moralis';
import { getExplorer } from '../../../helpers/networks';
import './Proposal.css';
import { CharityContext } from '../../Context/CharityContext';
import toast from 'react-hot-toast';

const Proposal = ({ proposal, showmodal, setProposalID, setNgoWalletAddress, userType }) => {
  const { ngoAddress, proposalID, amt, name, title, description, noHoursWorked } = proposal;
  const { data } = useMoralisQuery('DonationTable');

  const { Moralis, isAuthenticated, isWeb3Enabled, isWeb3EnableLoading } = useMoralis();
  const { toastStyles, contractABI, contractAddress } = useContext(CharityContext);
  const contractProcessor = useWeb3ExecuteFunction();

  const [isClicked, setIsClicked] = useState(false)

  const fetchAmountReceived = () => {
    let amt = 0;
    for (const i of JSON.parse(JSON.stringify(data))) {
      if (i.proposalID === proposalID) {
        amt += parseFloat(Moralis.Units.FromWei(i.amount));
      }
    }
    return amt;
  };


  const sendMoney = async(pID) => {
    if (isAuthenticated) {
      try {
        if (!isWeb3Enabled && !isWeb3EnableLoading) await Moralis.enableWeb3();
        const options = {
          contractAddress: contractAddress,
          functionName: 'acceptProposal',
          abi: contractABI,
          params: {
            proposalId: pID
          },
        };

        await contractProcessor.fetch({
          params: options,
          onSuccess: () => toast.success('Request Sent to HR Successfully!', toastStyles),
          onError: (error) => toast.error(error, toastStyles),
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  console.log(isClicked)

  return (
    <>{!isClicked && (<div className="proposal__card">
        <h4 className="section__heading">
          {name} : {title}
        </h4>
        <p className="p__normal">Description: {description}</p>
        <div className="p__funds">
          <p className="p__normal">
            <span>No. of Hours Worked</span> <br /> {noHoursWorked}
          </p>
          <p className="p__normal">
            <span>Expected Salary</span> <br />
            {amt} MATIC
          </p>
        </div>
        {userType !== 'NGO' && (
          <div className="proposal__card-buttonsContainer">
            <button onClick={() => {
              setIsClicked(true);
            }} style={{ marginRight: '1rem' }} className="custom__button">
              {' '}
              Reject
            </button>{' '}
            <button onClick={()=>sendMoney(proposalID)} className="custom__button">Send Money</button>
          </div>
        )}
      </div>)}
    </>
  );
};

export default Proposal;
