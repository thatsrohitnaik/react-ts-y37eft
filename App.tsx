import * as React from 'react';
// import { Abc } from './useMemo'
import './style.css';
import Memo from './Memo/parent';
import Callback from './Callback';

export default function App() {
  return (
    <div>
      <Callback />
      <Memo />
    </div>
  );
}
