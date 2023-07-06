import CartWidget from '../CartWidget/CartWidget'
import './Navegation.css'

const Navegation = () => {
  return (
    <header>
        <h1>Tienda de Ropa</h1>

        <nav>
            <ul>
                <li>Remeras</li>
                <li>Pantalones</li>
                <li>Zapatillas</li>
                <li>Buzos</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default Navegation