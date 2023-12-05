import React from 'react';
import { ColumnOptions, UserInputState } from './types';
import {
  AnnualData,
  calculateInvestmentResults,
  formatter,
} from '../util/investment';

interface ResultsProps {
  userInput: UserInputState;
  columns: ColumnOptions[];
}
export default function Results({ userInput, columns }: ResultsProps) {
  const results = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          {columns.map((item: ColumnOptions, index: number) => {
            return <td key={index}>{item.label}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {results.map((yearData: AnnualData, yearsDataIndex: number) => {
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          const updatedAnnualData = {
            totalInterest: totalInterest,
            ...yearData,
          };

          return (
            <tr key={yearsDataIndex}>
              {Object.keys(updatedAnnualData).map(
                (key: string, index: number) => {
                  return (
                    <td key={index}>
                      {formatter.format(updatedAnnualData[key])}
                    </td>
                  );
                }
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
