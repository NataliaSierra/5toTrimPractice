import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";

import { Home } from '../src/components2/Page/Home';
import { HomePage } from './components/Page/HomePage/HomePage'
import { NotFound } from "./components/UI/UINotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/Home' element={ <Home/>} />
                <Route path='*' element={ < NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App; 