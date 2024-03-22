import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.scss';

import ListingList from './components/ListingList';
import ListingDetails from './components/ListingDetails';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Properties for rent</Link>
                </nav>

                <div className="App">
                    <Routes>
                        <Route exact path="/" element={<ListingList/>}/>
                        <Route exact path="/listings/:listingId" element={<ListingDetails/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
