import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faGithub,
} from '@fortawesome/free-regular-svg-icons'

export default function Social() {
    return (
      <ul classname={styles.list} style={{'--icon-size': iconsize }}>
        <li>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span classname="sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
            <span classname="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                    <span classname="sr-only">github</span>
                </a>
            </li>
      </ul>
    );
}