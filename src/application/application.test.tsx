import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application component', () => {
    test('component renders correctly', () => {
        render(<Application />);
        const nameEl = screen.getByRole('textbox', {
            name: "Name"
        });
        expect(nameEl).toBeInTheDocument();
        
        const jobLocationEl = screen.getByRole("combobox");
        expect(jobLocationEl).toBeInTheDocument();

        const termsEl = screen.getByRole("checkbox");
        expect(termsEl).toBeInTheDocument();

        const submitEl = screen.getByRole("button");
        expect(submitEl).toBeInTheDocument();
    })
})