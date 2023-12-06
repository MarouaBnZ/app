import styles from './styles.module.css';

const {container}=styles;
const Container = ({children}) => {
  return (
    <div className={container}>
      {children}
    </div>
  )
}

export default Container