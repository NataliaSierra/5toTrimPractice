import react from "react";
import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";

import { Home } from '../src/components2/Page/Home';
import { HomePage } from './components/Page/HomePage/HomePage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/Home' element={ <Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;