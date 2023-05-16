import Greet from './Greet'
import { render, screen } from '@testing-library/react'

test('Greet component renders', () => {
    render(<Greet />); // render the component
    const textEl = screen.getByText(/hello/i)
    expect(textEl).toBeInTheDocument()
})

test('Greet renders with a name', () => {
    render(<Greet name='Cameron' />)
    const textEl = screen.getByText(/hello cameron/i)
    expect(textEl).toBeInTheDocument()
})