
import './css/header.css'

const header  = () =>
{
     return (
            <header>
                <div className="logo">
                    <h1>My Website</h1>
                </div>
                <nav className="navcontainer">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>

                        <li><a href="#">Login</a></li>

                    </ul>
                </nav>
            </header>


        )
}

export default header