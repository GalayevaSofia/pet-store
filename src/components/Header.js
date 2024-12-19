import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li className='nav-item'><Link className='nav-link' to="/">Главная</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/products">Продукты</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/cart">Оплата</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/contact">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
