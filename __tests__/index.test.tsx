// __tests__/index.test.jsx

import {render, screen} from '@testing-library/react'
import HomePage from '../pages/index'
import '@testing-library/jest-dom'

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /Hello world!!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
