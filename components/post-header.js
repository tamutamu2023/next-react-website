import styles from 'styles/post-header.module.css'
import ConverDate from 'conponents/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({ title, subtitle, publish = '' }) {
    return (
        <div classname={styles.stack}>
            <p classname={styles.subtitle}>{subtitle}</p>
            <h1 classname={styles.title}>{title}</h1>
            {publish && <div classname={styles.publish}>{publish}</div>}
            <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
            <ConverDate dateISO={publish} />
            

   </div>
)
}