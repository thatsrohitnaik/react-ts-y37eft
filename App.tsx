import * as React from 'react';
// import { Abc } from './useMemo'
import './style.css';
import Memo from './Memo/parent';
import Callback from './Callback';
import Debounce from './JS/debounce';
import Promise from './JS/promise';
import Classes from './JS/classes';

export default function App() {
  return (
    <div>
      {/* <Callback />
      <Memo />
       */}
      <Debounce />
      <Promise />
      <Classes />
    </div>
  );
}
