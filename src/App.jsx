import React from 'react';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-center mb-4">
                #&quot;&gt;&lt;img src=x onerror=prompt(1);&gt; †‡•&lt;img src=a onerror=javascript:alert('hacked')&gt;…‰€
            </h1>
            <div className="text-gray-600 text-center mb-6">
                Welcome to the app!
            </div>
            
            {/* "Made on ZAPT" Badge */}
            <div className="fixed bottom-4 right-4">
                <a 
                    href="https://www.zapt.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Made on ZAPT
                </a>
            </div>
        </div>
    );
}