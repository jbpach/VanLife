import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Vans, { loader as vansLoader } from './components/Vans';
import Van from './components/Van';
import Missing from './components/MissingPage/Missing';
import HostLayout from './components/HostComponents/HostLayout';
import Host from './components/HostComponents/Host';
import Income from './components/HostComponents/Income';
import Reviews from './components/HostComponents/Reviews';
import HostVans from './components/HostComponents/HostVans';
import HostVanDetail from './components/HostComponents/HostVanDetail';
import Details from './components/HostComponents/HostVan/Details';
import Pricing from './components/HostComponents/HostVan/Pricing';
import Photos from './components/HostComponents/HostVan/Photos';
import Error from './components/Error';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader}/>
        <Route path="vans/:id" element={<Van />} />

        <Route path="host" element={<HostLayout />} >
            <Route index element={<Host />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
            </Route>
            <Route path="Reviews" element={<Reviews />} />
        </Route>
        
        <Route path="*" element={<Missing />} />
    </Route>
));

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
};

export default App;