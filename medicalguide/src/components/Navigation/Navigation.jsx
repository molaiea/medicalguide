import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Search, SearchIconWrapper, StyledInputBase} from '../Search/search'
import SearchIcon from '@mui/icons-material/Search';

import routes from '../../app/routes'
import './Navigation.scss'
const Navigation = () => {
    const NAV_ITEMS = {
        Home: {
          link: routes.Home.path,
          text: "Home",
        },
        // restaurantList: {
        //   link: routes.restaurantList.path,
        //   text: intl.formatMessage(messages.linkRestaurantList),
        // },
      };
      function handleChange(event) {
        fetch('http://localhost:5000/get_data')
        .then(res => res.json())
        .then(res => console.log(res))
      }
      
    
  return (
    <>
      <nav className="navigation">
        <NavLink
          exact
          to={routes.Home.path}
          className="navigation__logo-link"
          activeClassName="navigation__logo-link--active"
          title={"MedicalGuide"}
        >
          <div className='title'>
          <img src={require('./icon.png')} alt="icon" className="logo_img"/>
          <h1>Medical<strong>Guide</strong></h1>
          </div>
        </NavLink>
        <NavLink
                exact
                className="navigation__link"
                activeClassName="navigation__link--is-active"
                to={routes.Home.path}
              >
                {"Accueil"}
              </NavLink>
              <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <NavLink className='navigation__link' {...bindTrigger(popupState)}>▾Avis</NavLink>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Cliniques</MenuItem>
            <MenuItem onClick={popupState.close}>Hôpitaux</MenuItem>
            <MenuItem onClick={popupState.close}>Dentistes</MenuItem>
            <MenuItem onClick={popupState.close}>Pharmacies</MenuItem>
            <MenuItem onClick={popupState.close}>Laboratoires</MenuItem>
            <MenuItem onClick={popupState.close}>Centres de transfusion sanguine</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>        
      </nav>
      {/* <NewRestaurantModal
        isOpen={isNewRestaurantModalOpen}
        onClose={() => setIsNewRestaurantModalOpen(false)}
      /> */}
    </>
  )
}

export default Navigation