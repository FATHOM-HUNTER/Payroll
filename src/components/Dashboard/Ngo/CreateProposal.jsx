import React, { useEffect, useContext, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast from 'react-hot-toast';
import dashboardImage from '../../../assets/salary.png';
import './CreateProposal.css';
import console from 'console-browserify';

const CreateProposal = () => {
  const { Moralis, isAuthenticated, isWeb3Enabled, isWeb3EnableLoading } = useMoralis();

  const { toastStyles, contractABI, contractAddress } = useContext(CharityContext);
  const contractProcessor = useWeb3ExecuteFunction();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [noOfHoursWorked, setNoOfHoursWorked] = useState(0);
  const [description, setDescription] = useState('');
  const [amtToBeRaised, setAmtToBeRaised] = useState(0);

  // useEffect(() => {
  //   const create = async () => {
  //     if (!isWeb3Enabled) await Moralis.enableWeb3();
  //     const options = {
  //       contractAddress: contractAddress,
  //       functionName: 'createUser',
  //       abi: contractABI,
  //     };

  //     await contractProcessor.fetch({
  //       params: options,
  //       onSuccess: () => toast.success('user created!', toastStyles),
  //       onError: (error) => toast.error(error, toastStyles),
  //     });
  //   };

  //   create();
  // }, []);

  const addProposal = async () => {
    if (isAuthenticated) {
      try {
        if (!isWeb3Enabled && !isWeb3EnableLoading) await Moralis.enableWeb3();
        const options = {
          contractAddress: contractAddress,
          functionName: 'createProposal',
          abi: contractABI,
          params: {
            name,
            title,
            noHoursWorked: noOfHoursWorked,
            content: description,
            amt: amtToBeRaised,
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
  };

  const validateForm = () => {
    let result =
      !name || !title || !noOfHoursWorked || !description || !amtToBeRaised ? false : true;
    return result;
  };

  const clearForm = () => {
    setName('');
    setTitle('');
    setNoOfHoursWorked(0);
    setDescription('');
    setAmtToBeRaised(0);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isWeb3Enabled) await Moralis.enableWeb3();
    if (isAuthenticated) {
      if (!validateForm()) {
        return toast.error('Incomplete Form Submission!', toastStyles);
      }
      console.log(name, title, noOfHoursWorked, description, amtToBeRaised);
      await addProposal();
      clearForm();
    } else {
      clearForm();
      return toast.error('Please Connect Wallet to Request for Salary!', toastStyles);
    }
  };

  return (
    <>
      <div className="app__dashboard container__bg flex__center section__padding">
        <h1 className="section__heading">Request for Salary</h1>
        <form className="app__dashboard-form" onSubmit={onSubmit}>
          <div className="app__dashboards-form-wrapper flex__center">
            <div className="app__dashboards-form-inputs flex__center">
              <input
                className=""
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                className=""
                type="text"
                placeholder="Job Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input
                style={{ marginBottom: '1rem' }}
                className=""
                type="number"
                placeholder="No of hours worked"
                onChange={(e) => setNoOfHoursWorked(e.target.value)}
                value={noOfHoursWorked}
              />
              <textarea
                style={{ marginBottom: '1rem' }}
                className=""
                type="text"
                placeholder="Description"
                rows="1"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <input
                style={{ marginBottom: '1rem' }}
                className=""
                type="number"
                placeholder="Expected Salary"
                onChange={(e) => setAmtToBeRaised(e.target.value)}
                value={amtToBeRaised}
              />
            </div>
            <button onClick={onSubmit} type="submit" className="custom__button">
              Submit
            </button>
          </div>
          <div className="app__dashboard-image">
            <p className="section__heading"></p>
            <img className="hostEvent-img" src={dashboardImage} alt="DashboardImage" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProposal;
