import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { transparentize } from 'polished'
import Button from './Button'

const Container = styled.div(
  ({ theme }) => `
    border: 2px dashed ${theme.colors.border};
    border-radius: ${theme.radii[1]};
    padding: ${theme.space[5]};
    > * + * {
      margin-top: 24px;
    }
  `
)

const Heading = styled.p(
  ({ theme }) => `
    color: ${theme.colors.grey};
    font-weight: ${theme.fontWeights.heading};
    text-transform: uppercase;
  `
)

const InfoBox = styled.div(
  ({ theme, error }) => `
    background-color: ${
      error ? transparentize(0.8, theme.colors.error) : theme.colors.nav
    };
    border: 1px solid ${error ? theme.colors.error : theme.colors.border};
    border-radius: ${theme.radii[1]};
    padding: ${theme.space[4]};
  `
)

const Colours = styled.div(
  ({ theme }) => `
    display: flex;
    > * + * {
      margin-left: ${theme.space[3]};
    }
    > div {
      width: 40px;
      height: 40px;
      border: 1px solid ${theme.colors.border};
      border-radius: 50%;
    }
  `
)

const Quote = styled.blockquote(
  ({ theme }) => `
    border-left: 4px solid ${theme.colors.primary};
    padding: ${theme.space[3]} 0 ${theme.space[3]} ${theme.space[4]};
  `
)

const ExampleUi = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      <Heading>Example UI elements</Heading>
      <InfoBox>
        <p style={{ marginBottom: '4px' }}>This is an InfoBox.</p>
        <p>
          Nunquam experientia tus. Est noster rector, cesaris. Dexter voxs
          ducunt ad index. Mori cito ducunt ad emeritis repressor.
        </p>
      </InfoBox>
      <InfoBox error>
        <p>This is an InfoBox in an error state.</p>
      </InfoBox>
      <div style={{ display: 'flex' }}>
        <Button style={{ marginRight: '8px' }}>Button</Button>
        <Button style={{ marginRight: '8px' }} secondary>
          Button
        </Button>
        <Button error>Button</Button>
      </div>
      <p>
        <a href="https://example.com">This is a link to https://example.com</a>
      </p>
      <Colours>
        {Object.entries(colors).map(([key, colour]) => (
          <div key={`colour-${key}`} style={{ backgroundColor: colour }} />
        ))}
      </Colours>
      <Quote>
        This is a block quote. Nunquam experientia tus. Est noster rector,
        cesaris. Dexter voxs ducunt ad index. Mori cito ducunt ad emeritis
        repressor.
      </Quote>
    </Container>
  )
}

export default ExampleUi
