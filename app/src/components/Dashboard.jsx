import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'

export default function Dashboard() {

    const {data, loading, error} = useFetchData()

    return (
        <div className={styles.dashboard}>
            <Options />
        </div>
    )
}
