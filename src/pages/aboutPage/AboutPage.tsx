import styles from './AboutPage.module.css';
import { DevelopersData } from './developerCard/DevelopersData';
import { DeveloperCard } from './developerCard/DeveloperCard';

export function AboutPage() {
  return (
    <div className={styles.mainContainer}>
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
