import React from 'react';
import { Paper } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeSnippet({ code, language = "javascript" }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '80%', margin: '20px auto'}}>
            <Paper elevation={7} style={{ padding: '0 5px', margin: '10px' }}>
                <SyntaxHighlighter language={language} style={vscDarkPlus} wrapLongLines>
                    {code}
                </SyntaxHighlighter>
            </Paper>
        </div>
    )
}

export default CodeSnippet
