import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  expect(document.body.textContent).toMatchInlineSnapshot(
    `"Hello world! I'm a React App."`,
  )
})
