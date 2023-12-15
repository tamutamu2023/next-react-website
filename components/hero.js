import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'
    
export default function Hero({ title, subtitle, image0n = false }) {
    return (
        <div>
            <div className={styles.filxContainer}></div>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {image0n(
                <figure>
                    <Image src={cube} alt="" layout="responsive" />
                </figure>
            )}
        </div>
    )
}
