import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeSnippet({ code, language = "javascript" }) {
    return (
            <div style={{ padding: '0px' }}>
                <SyntaxHighlighter language={language} style={vscDarkPlus} wrapLongLines>
                    {code}
                </SyntaxHighlighter>
            </div>
    )
}

export default CodeSnippet;
