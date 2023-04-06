import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';


const rootElement: HTMLDivElement= document.querySelector('#root') as HTMLDivElement;
createRoot(rootElement).render( 
<React.StrictMode>
  <BrowserRouter>
  <App />
</BrowserRouter>
</React.StrictMode>)

reportWebVitals();


