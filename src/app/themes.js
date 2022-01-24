// Some base options that will apply to all themes
export const base = {
  breakpoints: ['768px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {
    body: '800px',
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '36px',
    '48px',
    '60px',
    '80px',
    '96px',
  ],
  fontWeights: {
    heading: 700,
    mid: 600,
    body: 400,
  },
  lineHeights: {
    heading: 1.2,
    body: 1.4,
  },
  radii: ['2px', '4px', '8px'],
}

// Light theme colours
export const light = {
  primary: '#4851f4',
  background: '#ffffff',
  nav: '#f8f8f8',
  border: '#deebf1',
  text: '#202224',
  grey: '#aaaaaa',
  error: '#ff3333',
}

// Dark theme colours
export const dark = {
  primary: '#4851f4',
  background: '#1f2023',
  nav: '#27282b',
  border: '#303236',
  text: '#f8f8f8',
  grey: '#aaaaaa',
  error: '#ff3333',
}

// Solarized light theme colours
export const solarizedLight = {
  primary: '#4851f4',
  background: '#fdf6e3',
  nav: '#eee8d5',
  border: '#eee8d5',
  text: '#002b36',
  grey: '#586e75',
  error: '#dc322f',
}

// Solarized dark theme colours
export const solarizedDark = {
  primary: '#4851f4',
  background: '#002b36',
  nav: '#073642',
  border: '#073642',
  text: '#839496',
  grey: '#586e75',
  error: '#dc322f',
}
