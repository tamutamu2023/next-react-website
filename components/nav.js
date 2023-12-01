import Link from 'nexr/link'
import styles from 'styles/nav.module.css'

export default function Nav(){

    return (
        <nav>
            <ul className={styles.list}>

                <li>
                    <Link href="/">
                        <a>home</a>
                    </Link>
            </li>
                <li>
                    …
                </li>
                <li>
                    
                </li>
            </ul>
        </nav>
    )
}