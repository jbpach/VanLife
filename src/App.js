import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Vans from './components/Vans';
import Van from './components/Van';
import Missing from './components/MissingPage/Missing';
import HostLayout from './components/HostComponents/HostLayout';
import Host from './components/HostComponents/Host';
import Income from './components/HostComponents/Income';
import Reviews from './components/HostComponents/Reviews';
import HostVans from './components/HostComponents/HostVans';
import HostVanDetail from './components/HostComponents/HostVanDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<Van />} />

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Host />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetail />} />
                        <Route path="Reviews" element={<Reviews />} />
                    </Route>
                    
                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;