import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'

export default function Dashboard() {

    const [selection, setSelection] = useState(null)

    const {data, loading, error} = useFetchData(selection)

    function onClickHandler(clickedButton) {
        return () => {
            setSelection(clickedButton)
        }
    }

    return (
        <div className={styles.dashboard}>
            <div>
                <h1>LOTR INFO</h1>
                <Options selection={selection} setSelection={onClickHandler} />

            </div>
        </div>
    )
}
