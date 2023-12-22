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
            {image0n &&(
                <figure className={styles.image}>
                    <Image src={cube}
                        alt=""
                        layout="responsive"
                        sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" 
                        priority
                        placeholder='blur'
                    />
                    
                </figure>
            )}
        </div>
    )
}
