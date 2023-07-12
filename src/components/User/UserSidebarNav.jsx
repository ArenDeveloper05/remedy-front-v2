import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import './UserSidebarNav.scss';


import logoSrc from '../../assets/images/logo.svg';


export function UserSidebarNav({ className }){
  return (
    <div className={cn({
      'UserSidebarNav': true,
      [className]: Boolean(className),
    })}>
      <div className="UserSidebarNav__inner">
        <Link className="UserSidebarNav__logo" to="/">
          <img className="UserSidebarNav__logo-img" src={logoSrc} alt="Remedy" width="140" height="35"/>
        </Link>

        <ul className="UserSidebarNav__menu">
          <li>
            <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--profile" to="/profile">
              Profile
            </AuthRequiredLink>
          </li>
          <li>
            <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--reports" to="/reports">
              Reports
            </AuthRequiredLink>
          </li>
          <li>
            <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--programs" to="/programs">
              Program List
            </AuthRequiredLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
