import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import Van from './components/Van';
import Missing from './components/Missing';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans">
                        <Route index element={<Vans />} />
                        <Route path=":id" element={<Van />} />
                    </Route>
                    {/* <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<Van />} /> */}
                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;