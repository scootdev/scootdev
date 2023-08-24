import React from 'react';
import { Paper } from '@mui/material';
import Draggable from 'react-draggable';

function WindowContainer({ children, style, title, id, setActiveWindow, isActive }) {
    const handleMakeActive = () => {
        setActiveWindow(id);
    };

    const handleDragStart = () => {
        handleMakeActive(); // Set this window as active when dragging starts
    };

    return (
        <Draggable bounds="parent" onStart={handleDragStart}>
            <div
                onClick={handleMakeActive}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '80%',
                    margin: 'auto',
                    ...style,
                }}
            >
                <Paper
                    elevation={9}
                    style={{
                        padding: '15px 5px 0',
                        margin: '10px',
                        position: 'relative',
                        background: isActive ? '#BFBFFE' : undefined,
                    }}
                >
                    <div style={{ position: 'absolute', top: 3, right: 5 }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? 'black' : '#BFBFFE', display: 'inline-block', margin: '2px' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? 'black' : '#BFBFFE', display: 'inline-block', margin: '2px' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? 'black' : '#BFBFFE', display: 'inline-block', margin: '2px' }} />
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            padding: 2,
                            top: 3,
                            left: 5,
                            fontWeight: 'bold',
                            fontSize: '12px',
                            color: isActive ? 'black' : '#777',
                        }}
                    >
                        {title}
                    </div>
                    {children}
                </Paper>
            </div>
        </Draggable>
    );
}

export default WindowContainer;
