import Greet from './Greet'
import { render, screen } from '@testing-library/react'

test('Greet component renders', () => {
    render(<Greet />); // render the component
    const textEl = screen.getByText(/hello/i); // check that the component renders the text 'Hello'
    expect(textEl).toBeInTheDocument();
})