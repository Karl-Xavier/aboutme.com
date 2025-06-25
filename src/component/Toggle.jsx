import { Moon, Sun } from 'phosphor-react'
import React from 'react'
import { useNavContext } from './ContextAPI'

export default function() {

    const { lightMode, toggleBackground } = useNavContext()

return (
        <button style={!lightMode ? styles.moonsun : styles.lightmode} onClick={toggleBackground}>
            {lightMode ? <Moon size={20} weight='fill'/> : <Sun size={20} weight='fill'/>}
        </button>
  )
}

const styles = {
    moonsun: {
        border: '1px solid #eee',
        padding: '5px',
        borderRadius: '10px',
        cursor: 'pointer',
        marginRight: '10px',
        outline: 'none'
    },
    lightmode: {
        border: '1px solid #161414',
        padding: '5px',
        borderRadius: '10px',
        cursor: 'pointer',
        marginRight: '10px',
        outline: 'none'
    }
}