import styles from './DeveloperCard.module.css';

export function DeveloperCard(props: {
  name: string;
  role: string;
  image: string;
  contribution: string;
  colaborationMethod: string;
  shortBio: string;
  gitHub: string;
}) {
  return (
    <div className={styles.mainCardContainer}>
      <div className={styles.titleContainer}>{props.name}</div>
      <div className={styles.roleContainer}>{props.role}</div>
      <div className={styles.imageContainer}>
        <img className={styles.imageDev} src={props.image} alt="DeveloperPhoto" />
      </div>
      <div className={styles.contributionContainer}>Contribution: {props.contribution}</div>
      <div className={styles.colaborationMethodContainer}>{props.colaborationMethod}</div>
      <div className={styles.shortBioContainer}>{props.shortBio}</div>
      <div className={styles.linkContainer}>
        <a className={styles.link} href={props.gitHub}>
          Welcome to Github of {props.name}
        </a>
      </div>
    </div>
  );
}
