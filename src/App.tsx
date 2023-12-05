import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { ColumnOptions, UserInputState } from './components/types';
import Results from './components/Results';

function App() {
  const columns: ColumnOptions[] = [
    {
      field: 'year',
      label: 'Year',
    },
    {
      field: 'Investment Value',
      label: 'Investment Value',
    },
    {
      field: 'Interest (Year)',
      label: 'Interest (Year)',
    },
    {
      field: 'Total Interest',
      label: 'Total Interest',
    },
    {
      field: 'Invested Capital',
      label: 'Invested Capital',
    },
  ];
  const [userInput, setUserInput] = useState<UserInputState>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0,
  });
  const handleUserInputChange = (
    inputIdentifier: keyof UserInputState,
    newValue: number
  ) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInputChange} />
      <Results columns={columns} userInput={userInput} />
    </>
  );
}

export default App;
