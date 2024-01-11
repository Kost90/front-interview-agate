
import { Outlet } from 'react-router-dom';
import CountryList from '../components/countrylist/CountryList';
import styles from './RootLayout.module.css'

function RootLayout() {
  return (
    <div className={styles.root_container}>
        <CountryList/>
        <Outlet/>
    </div>
  )
}

export default RootLayout