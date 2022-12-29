import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main';
import NotFound from '@Pages/NotFound/notFound';
import Footer from '@Components/footer/footer';
import Admin from '@Pages/admin/admin';

const App = () => {
    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/admin" element={<Admin/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </div>

    );
};

export default App;
