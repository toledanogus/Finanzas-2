import { GastosProvider } from "./context/GastosProvider";
import { GastosContexto } from './context/GastosContext';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FinanzasQ1 } from './FinanzasQ1'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <GastosProvider>
      <FinanzasQ1 />
    </GastosProvider>
)
