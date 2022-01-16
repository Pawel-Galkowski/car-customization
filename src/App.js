import React from 'react';
import ConfigurationMenu from './components/configurationMenu';
import PreviewWindow from './components/previewWindow';
import cars from './attributes';
import './styles/index';

function App() {
  return (
    <div className="app">
      <PreviewWindow />
      <ConfigurationMenu cars={cars} />
    </div>
  );
}

export default App;
