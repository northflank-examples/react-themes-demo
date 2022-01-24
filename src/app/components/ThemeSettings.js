import React, { useContext } from 'react'
import Select from './Select'
import Button from './Button'
import { ThemePreferenceContext, themesMap } from '../App'

const ThemeSettings = () => {
  const {
    currentTheme,
    setCurrentThemeAndSavePref,
    customTheme,
    setCustomTheme,
    setCustomThemeAndSavePref,
  } = useContext(ThemePreferenceContext)
  return (
    <>
      <label style={{ display: 'block', marginBottom: '32px' }}>
        <p style={{ marginBottom: '8px' }}>Theme</p>
        <Select
          value={currentTheme}
          onChange={(e) => {
            if (e.target.value === 'custom' && !Object.keys(customTheme).length)
              setCustomThemeAndSavePref(themesMap['light'])
            setCurrentThemeAndSavePref(e.target.value)
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="solarizedLight">Solarized light</option>
          <option value="solarizedDark">Solarized dark</option>
          <option value="custom">Custom</option>
        </Select>
      </label>
      {currentTheme === 'custom' && (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: '8px',
              marginBottom: '32px',
            }}
          >
            {Object.entries(customTheme).map(([key, val]) => (
              <label key={`custom-${key}`}>
                <p style={{ marginBottom: '4px' }}>{key}</p>
                <input
                  type="color"
                  value={val}
                  onChange={(e) => {
                    setCustomTheme((t) => {
                      const current = { ...t }
                      current[key] = e.target.value
                      return current
                    })
                  }}
                  style={{ display: 'block', width: '100%' }}
                />
              </label>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: '8px',
              marginBottom: '32px',
            }}
          >
            <Button
              onClick={() => {
                setCustomThemeAndSavePref(customTheme)
                alert('Custom theme was saved')
              }}
            >
              Save
            </Button>
            <Button
              secondary
              onClick={() => {
                setCustomThemeAndSavePref(themesMap.light)
                alert('Custom theme was reset to default')
              }}
            >
              Reset
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default ThemeSettings
