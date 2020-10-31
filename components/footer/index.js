import Visa from '../icons/visa'
import MasterCard from '../icons/mastercard'
import AmericanExpress from '../icons/american-express'
import PayPal from '../icons/paypal'
import RainyDaysLogo from '../icons/logo'
import DHL from '../icons/dhl'
import FedEx from '../icons/fedex'
import Bring from '../icons/bring'
import TNT from '../icons/tnt'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>FAQ</figcaption>
          <ul className={styles.menu}>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/complaints">Complaints</a></li>
          </ul>
        </figure>
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>Company</figcaption>
          <ul className={styles.menu}>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </figure>
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>Shortcuts</figcaption>
          <ul className={styles.menu}>
            <li><a href="/">Home</a></li>
            <li><a href="/mens-clothing">Men's Clothing</a></li>
            <li><a href="/womens-clothing">Women's Clothing</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </figure>
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>Legal</figcaption>
          <ul className={styles.menu}>
            <li><a href="/cookies">Use of Cookies</a></li>
            <li><a href="/terms">Terms &amp; Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/dpa">DPA</a></li>
          </ul>
        </figure>
      </div>

      <div className={styles.section}>
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>We Accept</figcaption>
          <ul className={styles.menu}>
            <li><Visa /></li>
            <li><MasterCard /></li>
            <li><AmericanExpress /></li>
            <li><PayPal /></li>
          </ul>
        </figure>
        <RainyDaysLogo size="2" />
        <figure className={styles.figure}>
          <figcaption className={styles.caption}>Delivery Options</figcaption>
          <ul className={styles.menu}>
            <li><DHL /></li>
            <li><FedEx /></li>
            <li><Bring /></li>
            <li><TNT /></li>
          </ul>
        </figure>
      </div>
    </footer>
  )
}
 
export default Footer