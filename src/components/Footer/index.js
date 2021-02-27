import React from 'react'

import pck from './../../../package.json'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles['footer']}>Design by aonguyen, v{pck.version}</div>
    )
}