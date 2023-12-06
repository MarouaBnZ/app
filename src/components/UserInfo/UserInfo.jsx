// import PropTypes from 'prop-types';
import styles from './styles.module.css'

// UserInfo.PropTypes = {
//   name:PropTypes.string,
//   age:PropTypes.string,
//   location:PropTypes.string,
//   phone:PropTypes.string,
// };
const {userInfo , userDate} = styles

const UserInfo = ({name,age,location,phone}) => {
  return (
    <>
    <div className={userInfo}>
<ul>
  <li className={userDate}>{name}</li>
  <li>{age}</li>
  <li>{location}</li>
  <li>{phone}</li>
</ul>
    </div>
    </>
  )
}

export default UserInfo