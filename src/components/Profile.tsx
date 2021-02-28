import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src='https://avatars.githubusercontent.com/u/11478538?s=460&u=9c988c89e270ba12a7464b769297420abfcece2a&v=4'
        alt='Marcelo Santos'
      />
      <div>
        <strong>Marcelo Santos</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level 1
        </p>
      </div>
    </div>
  )
}
