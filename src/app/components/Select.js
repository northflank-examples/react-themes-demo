import styled from 'styled-components'

const Select = styled.select(
  ({ theme }) => `
    appearance: none;
    display: block;
    width: 100%;
    background-color: ${theme.colors.nav};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radii[0]};
    font-size: ${theme.fontSizes[2]};
    font-family: ${theme.fonts.body};
    line-height: 1.4;
    padding: ${theme.space[3]} ${theme.space[4]};
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:${theme.colors.text.replace(
      '#',
      '%23'
    )};"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>');
    background-repeat: no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: 7px;
    &:focus {
      outline: 0;
    }
  `
)

export default Select
