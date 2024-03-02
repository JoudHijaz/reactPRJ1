import styles from './Navbar.module.css'; 

function Navbar() {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className='row'>
                    <div className={styles.logoContainer}>
                    <img src="assets/logo.png"  />
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Sign in</a>
                        </li>
                        <li>
                            <a href="#">Sign up</a>
                        </li>
                        <li>
                            <a href="#">Categories</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>


                    </ul>
                </nav>
                

            </div>
            {/* in the future i will import the sidebar here i want it to be included in the navbar */}
        </header>
    );
}
export default Navbar;
