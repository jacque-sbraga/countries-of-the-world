import React from 'react';
import { Link } from 'react-router-dom';

import { Moon, Sun } from '@phosphor-icons/react';
import HeaderComponent from './header';

export default function Header({ themeToggle, isDark }) {
  return (
    <HeaderComponent>
      <Link to='/'>
        <h2>Where in the world?</h2>
      </Link>

      <label htmlFor='set-theme'>
        <input type='checkbox' title='Switch theme' onChange={themeToggle} />
        {isDark ? <Sun size={18} weight='fill' /> : <Moon size={18} />}
        Dark Mode
      </label>
    </HeaderComponent>
  );
}
