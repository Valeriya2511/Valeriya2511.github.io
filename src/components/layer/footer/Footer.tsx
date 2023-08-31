import { Navigation } from '../../../components/navigation/Navigation';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <>
      <footer className= {styles.footer}>
			<p className= {styles.law}>© 2023 All rights reserved, but this is not accurate</p>
      <ul className={styles.list}>
        <a href="tel:87777777778">
          <span className = {styles.itel} />
          <li className= {styles.tel}> 8 (777) 777 77 78</li>
        </a>
        <a href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0+100000/@49.8240866,73.00382,11z/data=!3m1!4b1!4m6!3m5!1s0x4243465ad22d0559:0xa90b6be0d244d433!8m2!3d49.8046835!4d73.1093826!16zL20vMDFubHJ6?hl=ru&entry=ttu">
          <span className = {styles.iloc}/>
          <li className = {styles.lacotion}>Kazakhstan, Karaganda</li>
        </a>
				<a href="mailto:ask@justastore.com">
          <span className = {styles.imail}/>
          <li className={styles.mail}>ask@justshop.com</li>
        </a>
      </ul>
    </footer>
    </>
  );
}