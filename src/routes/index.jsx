import {BrowserRouter as Router, Routes, Route} from 'react-router'
import { Suspense, lazy } from 'react'
import NotFound from '../pages/notFound'
import Home from '../pages'

export default function AppRoutes(){
    return (
        <Router>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path='' element={''} />
                    <Route index element={<Home />} /> // Index page
                    <Route path='*' element={<NotFound />} /> // 404 page
                </Routes>
            </Suspense>
        </Router>
    )
}