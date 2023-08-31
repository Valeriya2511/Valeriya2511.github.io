import styles from './MainPage.module.css'

export function MainPage() {
  return (
  <div className={styles.mainPages}>
    <div className = {styles.container}>
      <h1 className= {styles.title}>
        Just a store
      </h1>
      <p className = {styles.greetings}>
        Welcome to our simple online store! Our company welcomes everyone who visits the site!
      </p>
      <p className = {styles.greetings}>
        Our simple online store offers the lowest prices, don't even try to find cheaper!
      </p>
    </div>
  </div>
  )
}
