import React from 'react'
import './MainMenu.css'
import cover from '../../assets/user.jpg'

export default function MainMenu({onMenuClick}) {
    const handleSelect = (event) => {
        onMenuClick(event.target.closest('.menu_item'))
    }
  return (
    <>
    <header className='menu_container'>

        <div className="user_info">
           <img className='user_cover' src={cover} alt="acc_cover"/>
           <label>Username</label> 
        </div>

        <ul className="menu_list">
                <li className='menu_item' onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/ICON - Search.png')} alt="" />
                    <label>Search</label>
                </li>
                <li className='menu_item' style={{background: '#3b486d'}} onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/Group 46.png')} alt="" />
                    <label>Home</label>
                </li>
                <li className='menu_item' onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/Group 56.png')} alt="" />
                    <label>TV Shows</label>
                </li>
                <li className='menu_item' onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/Group 54.png')} alt="" />
                    <label>Movies</label>
                </li>
                <li className='menu_item' onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/Group 53.png')} alt="" />
                    <label>Genres</label>
                </li>
                <li className='menu_item' onClick={(event)=>handleSelect(event)}>
                    <img className='menu_icon' src={require('../../assets/icons/Group 47.png')} alt="" />
                    <label>Watch Later</label>
                </li>
            </ul>

            <ul className='settings_list'>
                <li>LANGUAGE</li>
                <li>GET HELP</li>
                <li>EXIT</li>
            </ul>
    </header>
    <div className="bg"></div>
    </>
  )
}
