import React from 'react'
import useTheme from '../contexts/theme'

const ThemeBtn = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme();
    const onChangeBtn=(e)=> {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label htmlFor="">
            <input
            type='checkbox'
            value=''
            className=''
            onChange={onChangeBtn}
            checked={themeMode === 'dark'}
            />
            <div className=''></div>
            <span>Toggle Theme</span>
        </label>
    )
}

export default ThemeBtn
