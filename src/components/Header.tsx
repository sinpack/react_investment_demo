import React, { useState } from 'react';
// import { ColumnOptions } from './types';

// interface HeaderProps {
//   columns: ColumnOptions[];
// }
export default function Header() {
  const renderHeaderItem = () => <div></div>;
  return (
    <header id="header">
      <img
        src="src\assets\investment-calculator-logo.png"
        alt="investment logo"
      />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
