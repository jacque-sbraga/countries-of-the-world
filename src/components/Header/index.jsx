import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Moon, Sun } from '@phosphor-icons/react';
import HeaderComponent from './header';
import { switchTheme } from '../../store/modules/actions';

export default function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.reducer.darkMode);

  const handleClick = () => {
    dispatch(switchTheme());
  };

  return (
    <HeaderComponent>
      <Link to='/'>
        <h2>Where in the world?</h2>
      </Link>

      <label htmlFor='set-theme'>
        <input type='checkbox' title='Switch theme' onChange={handleClick} id='set-theme' />
        {darkMode ? <Sun size={18} weight='fill' /> : <Moon size={18} />}
        Dark Mode
      </label>
    </HeaderComponent>
  );
}
