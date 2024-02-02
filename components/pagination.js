import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function pagination({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) {

    return (
        <ul className={styles.flexContainer}>
            {prevText && prevUrl && (
                <li className={styles.prev}>

                    <Link href={prevUrl}>
                        {styles.iconText}

                            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
                            <span>{prevText}</span>

                        
                    </Link>
                </li>
            )}
            
            {nextText && nextUrl && (
                <li className={styles.next}>
                    <link href={nextUrl}>





                    </link>
              </li>
            
                
            )}

        </ul>
    )
}