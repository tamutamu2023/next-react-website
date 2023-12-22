import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faGithub,
} from '@fortawesome/free-regular-svg-icons'

export default function Social() {
    return (
        <ul classname={styles.list}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span classname="sr-only">Twitter</span>
                 </a>
            </li>
            <li>
                <a href="https://www.facebook.com/">
                    
                </a>
            </li>
        </ul>
    )
}