import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#111', paddingX: 7, color: '#BFBFFD' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ fontWeight: 400 }}>Scoot<span style={{ fontWeight: 600 }}>Dev</span></Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
