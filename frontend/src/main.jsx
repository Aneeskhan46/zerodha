import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import "./index.css"
  
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router";
import About from './landing_page/about/About.jsx';

import Pagenotfound from './landing_page/Pagenotfound.jsx';
import Support from './landing_page/Support/Support.jsx';
import Product from './landing_page/Product/Product.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import Pricing from './landing_page/pricing/Pricing.jsx';

let router = createBrowserRouter([

  { path:"/" , element :<> <Navbar/> <App/>  <Footer/> </> },
  { path:"/About" , element :<>  <Navbar/>  <About/>  <Footer/>  </>},
  { path:"/Price", element: <>  <Navbar/>  <Pricing/>  <Footer/>  </> },
   { path:"/Support" , element :<>  <Navbar/>  <Support/>  <Footer/>  </> },
   { path:"/Product" , element :<>  <Navbar/>  <Product/>  <Footer/>  </>},
  { path:"*" , element :<>  <Navbar/>  <Pagenotfound/>  <Footer/>  </> }
   
    
  
]);


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
       
          <RouterProvider router={router} />
  </StrictMode>,
)
