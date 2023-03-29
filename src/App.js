import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Vans, { loader as vansLoader } from './components/Vans';
import Van, { loader as vanDetailLoader} from './components/Van';
import Missing from './components/MissingPage/Missing';
import HostLayout from './components/HostComponents/HostLayout';
import Host from './components/HostComponents/Host';
import Income from './components/HostComponents/Income';
import Reviews from './components/HostComponents/Reviews';
import HostVans, {loader as hostVansLoader} from './components/HostComponents/HostVans';
import HostVanDetail, {loader as hostVanDetailLoader} from './components/HostComponents/HostVanDetail';
import Details from './components/HostComponents/HostVan/Details';
import Pricing from './components/HostComponents/HostVan/Pricing';
import Photos from './components/HostComponents/HostVan/Photos';
import Error from './components/Error';
import Login, {loader as loginLoader} from './components/LoginPage/Login';
import { requireAuth } from './utils';
import "./server";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader}/>
        <Route path="vans/:id" element={<Van />} loader={vanDetailLoader} />
        <Route path="login" element={<Login />} loader={loginLoader}/>
        
        <Route path="host" element={<HostLayout />}>
            <Route
                index
                element={<Host />}
                loader={async () => await requireAuth()}
            />
            <Route
                path="income"
                element={<Income />}
                loader={async () => await requireAuth()}
            />
            <Route
                path="reviews"
                element={<Reviews />}
                loader={async () => await requireAuth()}
            />
            <Route
                path="vans"
                element={<HostVans />}
                loader={hostVansLoader}
            />
            <Route
                path="vans/:id"
                element={<HostVanDetail />}
                loader={hostVanDetailLoader}
            >
                <Route
                    index
                    element={<Details />}
                    loader={async () => await requireAuth()}
                />
                <Route
                    path="pricing"
                    element={<Pricing />}
                    loader={async () => await requireAuth()}
                />
                <Route
                    path="photos"
                    element={<Photos />}
                    loader={async () => await requireAuth()}
                />
            </Route>
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