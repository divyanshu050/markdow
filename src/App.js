import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import "./style.css";


function App() {
  const [markDown, setMarkdown] = useState(null)
  return (
    <>
      <h1 className='heading'>MarkDown Editior <a href="https://www.markdownguide.org/cheat-sheet" target="_blank"> Cheatsheet</a> </h1>
      <div className="center">
        <textarea placeholder='Enter Markdown Syntax ' className="left" value={markDown} onChange={(element) => setMarkdown(element.target.value)}></textarea>

        <div className='right'>
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
      <p className='copy'>&copy;2022 Divyanshu Gaur</p>
    </>
  );
}

export default App;
