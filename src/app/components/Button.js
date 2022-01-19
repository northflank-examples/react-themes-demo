import styled from 'styled-components'

const Button = styled.button(
  ({ theme, secondary }) => `
  appearance: none;
  background-color: ${!secondary ? theme.colors.primary : theme.colors.nav};
  color: ${!secondary ? '#fff' : theme.colors.text};
  border: 0;
  border-radius: ${theme.radii[0]};
  padding: ${theme.space[3]} ${theme.space[4]};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[2]};
  cursor: pointer;
`
)

export default Button
