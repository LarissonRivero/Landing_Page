import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>    
                    <a className="nav-link active" href="#">About</a>
                    <a className="nav-link active" href="#">Services</a>
                    <a className="nav-link active" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
