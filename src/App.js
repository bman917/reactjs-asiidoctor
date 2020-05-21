import React from 'react';
import './App.css';
import Asciidoc from 'react-asciidoc';
import content from './file.adoc';
function App() {
  return (
    <div>
      <Asciidoc className="asciidoc">{content}</Asciidoc>
    </div>
  );
}
export default App;
