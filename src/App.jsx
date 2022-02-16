import { useState } from 'react'
import './App.css'
import Directory from './components/Directory';
import files from './files.json';

function App() {
    return (
        <div className="spacing">
            <Directory files={files} />
        </div>
    );
};

export default App;
