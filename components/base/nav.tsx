import React from 'react'

export const Nav = () => {
  return (
    <nav className='flex gap-16 py-4 px-16 text-slate-950'>
      <strong>Nicolas</strong>
      <ul className='flex gap-8'>
        <li><a href="#profil"  className='cursor-pointer hover:underline' title="profile">Profil</a></li>
        <li><a href="#projets"  className='cursor-pointer hover:underline' title="profile">Projets</a></li>
        <li><a href="#contact"  className='cursor-pointer hover:underline' title="profile">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
