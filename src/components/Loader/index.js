import React from 'react'
import { Spin } from 'antd'

import styles from './loader.module.css'

export default function Loader() {
    return (
        <div className={styles['wrapper-loading']}>
            <Spin tip='Loading' />
        </div>
    )
}