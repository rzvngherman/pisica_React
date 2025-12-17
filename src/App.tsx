//import React, { useState } from 'react';
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { PageRoute } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<PageRoute>(PageRoute.HOME);

    const renderContent = () => {
        switch (currentPage) {
            case PageRoute.HOME:
                return <HomePage />;
            case PageRoute.GALLERY:
                return <GalleryPage />;
            case PageRoute.CONTACT:
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            {/* Top: Header */}
            <Header currentPage={currentPage} onNavigate={setCurrentPage} />

            {/* Middle: Content */}
            <main className="flex-grow flex flex-col">
                {renderContent()}
            </main>

            {/* Bottom: Footer */}
            <Footer />
        </div>
    );
};

export default App;