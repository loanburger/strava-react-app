import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TestIds } from 'src/test/utils/testId.util';
import { useSelector } from 'react-redux';
import { getHeaderTitle } from 'src/selectors';
import { Link } from 'react-router-dom';

const Header = () => {
  const title = useSelector(getHeaderTitle);

  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={5}>
      <AppBar
        className="header-bar"
        position="fixed"
        data-testid={TestIds.headerAppBarTestId}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 8 }}>
            <Link to="" className="title-link">
              {title}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
