import React, { useState } from 'react';
import { UserInputState } from './types';

interface UserInputProps {
  userInput: UserInputState;
  onChange: CallableFunction;
}

export default function UserInput({ userInput, onChange }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investement</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange('initialInvestment', parseInt(e.target.value));
            }}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange('annualInvestment', parseInt(e.target.value));
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange('expectedReturn', parseInt(e.target.value));
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange('duration', parseInt(e.target.value));
            }}
          />
        </p>
      </div>
    </section>
  );
}
