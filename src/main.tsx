import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LandingIklan from './iklan.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  path === '/iklan' || path === '/iklan.html' ? <LandingIklan /> : <App />
);
