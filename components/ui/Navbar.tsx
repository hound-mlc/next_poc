import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { AppBar, Typography } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';


const pages = [{label: 'common:home', href: '/'}, {label: 'common:list', href: '/list-static'}, {label: 'common:todoSSG', href: '/todo'}, {label: 'common:todoStatic', href: '/todo-static'}, {label: 'common:users', href: '/users'}];
const languages = [{countryCode: 'ES', lang: 'Español', label: 'ES'}, {countryCode: 'GB', lang: 'English', label: 'EN'}];

const Navbar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState({countryCode: 'ES', lang: 'Español', label: 'ES'});
  const { locale, asPath } = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    locale === 'en' ? setCurrentLanguage({countryCode: 'GB', lang: 'English', label: 'EN'}) : setCurrentLanguage({countryCode: 'ES', lang: 'Español', label: 'ES'})
  }, [locale]);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: 'black',
      color: 'whitesmoke'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            NextJS - AT Sistemas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{t(page.label)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap={true}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            M.L. Camarena
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.label}  href={page.href}>
                <Button
                  sx={{ my: 2, color: '#EBEBEB', display: 'block' }}
                >
                  {t(page.label)}
                </Button>
              </Link>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Change language">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ReactCountryFlag countryCode={currentLanguage.countryCode} svg/>
                <Typography sx={{ color: '#EBEBEB', margin: 1 }}>{currentLanguage.label}</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {languages.map((lang: any, index: number) => (
                <MenuItem key={index}>
                  <Link href={asPath} locale={lang.label.toLowerCase()}>
                    <Typography textAlign="center"><ReactCountryFlag countryCode={lang.countryCode} svg/>{lang.lang}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;