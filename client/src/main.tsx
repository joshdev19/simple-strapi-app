import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "http://localhost:1337/api/"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    <App />
    <ToastContainer/>
  </BrowserRouter>,
)
