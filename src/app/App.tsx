import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/theme";
import {AppRouter} from "app/providers/router";
import clsx from "clsx";


const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
