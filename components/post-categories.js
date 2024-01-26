import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen} from '@fortawesome/free-regular-svg-icons'
 
export default function PostCategories({ categories }) {
    return (
        <div classname={styles.flexContainer}>
            <h3 classname={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span classname="sr-only">Categories</span>
                </h3>
        <ul classname={styles.list}>
            {categories.map(({name, slug}) => (
            
            <li key={slug} >
                <link href={'/blog/category/${slug}'}>
                    
                    <a>{name}</a>       
            </link>
            </li>
            ))}
            </ul>
        </div>
    )
}