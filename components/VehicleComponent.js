import styles from '../styles/molecules/VehicleComponent.module.css'


export default function VehicleComponent() {
  return (
    <div className={styles.btns}>
      <button>
        <h4>Icon</h4>
        <div className={styles.btnLeft}>
          <h5>Motor Bike</h5>
          <p>Ideal for light weight items.</p>
        </div>
      </button>
    </div>
  )
}
