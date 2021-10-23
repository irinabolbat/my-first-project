import App from './App';
import './Header.css';

const Header = () =>
<header>
    <>
    <h1 className="brand">Business Casual</h1>
    <div>3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>
            <div className='menu'>
                <ul className="menu-list">
                    <li>
                        <a href="Header.js">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
    </>
</header>

export default Header;