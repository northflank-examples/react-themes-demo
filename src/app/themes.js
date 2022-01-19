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
  text: '#202224',
  grey: '#aaa',
  error: '#f33',
  border: '#deebf1',
}

// Dark theme colours
export const dark = {
  primary: '#4851f4',
  background: '#1f2023',
  nav: '#27282b',
  text: '#f8f8f8',
  grey: '#aaa',
  error: '#f33',
  border: '#303236',
}

// Solarized theme colours
export const solarized = {
  primary: '#4851f4',
  background: '#fdf6e3',
  nav: '#eee8d5',
  text: '#002b36',
  grey: '#586e75',
  error: '#f33',
  border: '#eee8d5',
}
