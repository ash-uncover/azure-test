import React from 'react'

import {
  useTranslation
} from 'react-i18next'

import {
  Switch,
  Redirect,
  Route,
  NavLink
} from 'react-router-dom'

import Home from 'components/home/Home'
import Images from 'components/images/Images'

import './App.scss'

const App = () => {
  const { t } = useTranslation()

  return (
    <div className='app'>
      <div>
        {t('title')}
      </div>
      <NavLink
        className='link'
        to='/home'
        activeClassName='active'
      >
        Home
      </NavLink>
      <NavLink
        className='link'
        to='/images'
        activeClassName='active'
      >
        Images
      </NavLink>

      <img
        className='image-small'
        src={new URL('assets/images/test_3.jpg', import.meta.url)}
        alt='image3'
      />

      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/images' exact>
          <Images />
        </Route>
        <Route path='*'>
          <Redirect to={{
              pathname: '/home',
              state: { from: null }
            }}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
