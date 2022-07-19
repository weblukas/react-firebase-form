import React from 'react'
import { Outlet } from 'react-router-dom';
import style from './SharedLayout.module.scss'

const SharedLayout = () => {
  return (
    <div className={style.container}>
        <Outlet />
    </div>
  )
}

export default SharedLayout