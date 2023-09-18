import styles from './AboutPage.module.css';
import { DevelopersData } from './developerCard/DevelopersData';
import { DeveloperCard } from './developerCard/DeveloperCard';

export function AboutPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        <a className={styles.rsLink} href="https://rs.school/">
          <img
            className={styles.rsLogo}
            src="./rs_school.svg"
            alt="learn more about the educational program by linking it to the school's website"
          />
          <span className={styles.rsText}>
            Learn more about the educational program by linking it to the school's website
          </span>
        </a>
        <div className={styles.description}>
          The final educational project “eCommerceApplication”, implemented through teamwork of students of the RSschool
          “JavaScript/Front-end” course. Performed by the “Just a Team” team consisting of: Valery2511, Kap66,
          AlexDrags. Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a
          digital environment. The application is powered by CommerceTools, a leading provider of commerce solutions for
          B2C and B2B enterprises.
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {DevelopersData.map((developer, index) => {
          return (
            <DeveloperCard
              name={developer.name}
              role={developer.role}
              image={developer.image}
              contribution={developer.contribution}
              colaborationMethod={developer.colaborationMethod}
              shortBio={developer.shortBio}
              gitHub={developer.gitHub}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
