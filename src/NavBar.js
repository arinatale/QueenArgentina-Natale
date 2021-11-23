
import './css/bootstrap.css';
import './css/style.css';


function NavBar() {
  return (
    

<nav className="navbar navbar-expand-md navbar-dark ">
            <a href="index.html" class="navbar-brand" id="logo">queen argentina</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="biografia.html">Biografía</a></li>
                    <li className="nav-item"><a className="nav-link" href="galeria.html">Galeria</a></li>
                    <li className="nav-item"><a className="nav-link" href="discografia.html">Comprar Discografía</a></li>
                    <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
                </ul>
            </div>
        </nav>



    
  
  );
}

export default NavBar;