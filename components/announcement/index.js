import styles from './announcement.module.css'

const Announcement = () => {
  return (
    <div className={styles.announcement}>
      <div className={styles.inner}>
        <p className={styles.text}>Get 10% off your next purchase! Use coupon code: <strong>DISCOUNT10</strong></p>
        <p className={styles.text}>Coupon code <strong>DISCOUNT10</strong> for 10% off!</p>
      </div>
    </div>
  )
}

export default Announcement