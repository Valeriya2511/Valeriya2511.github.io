import styles from './MainPage.module.css'

export function MainPage() {
  return (
  <div className={styles.mainPages}>
    <div className = {styles.container}>
      <h1 className= {styles.title}>
        Just a store
      </h1>
      <p className = {styles.greetings}>
        ★ Welcome to our simple online store! Our company welcomes everyone who visits the site!
      </p>
      <p className = {styles.greetings}>
        ★ Our simple online store offers the lowest prices, don't even try to find cheaper!
      </p>
      <p className = {styles.itemlist}>Our range</p>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.jacket}`}></li>
        <li className={`${styles.item} ${styles.bag}`}></li>
        <li className={`${styles.item} ${styles.shirt}`}></li>
        <li className={`${styles.item} ${styles.shoes}`}></li>
        <li className={`${styles.item} ${styles.ring}`}></li>
        <li className={`${styles.item} ${styles.scarf}`}></li>
        <li className={`${styles.item} ${styles.wallet}`}></li>
        <li className={`${styles.item} ${styles.belt}`}></li>
        <li className={`${styles.item} ${styles.jeans}`}></li>
        <li className={`${styles.item} ${styles.dress}`}></li>
        <li className={`${styles.item} ${styles.glasses}`}></li>
    </ul>
    </div>
  </div>
  )
}
