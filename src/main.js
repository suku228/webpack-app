
import React from 'react';
import {createRoot} from 'react-dom/client';
import ButtonComponent from "../components/BtnComponent";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<ButtonComponent />)
