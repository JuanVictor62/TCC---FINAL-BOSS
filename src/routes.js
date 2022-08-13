import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage/index.js'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
    )
}