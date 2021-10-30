import './css/header.css'
import Header from './header.js'
const jumbotron =() =>
{
    return (
        <div className="jumbotron">
            <Header />
            <div className="poster">
            <div className="content">
						<h1>Make Your Marketing Real</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
							vitae dolore.
						</p>
                        <div className="button">
                        <a href="#" className="btn-primary">Learn More</a>
						<a href="#" className="btn-secondary">Sign Up</a>
                        </div>
						
					</div>
                <div className="image">
                <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt="Home2.jpg" />
                </div>
           </div>

            </div>

    )
}

export default jumbotron