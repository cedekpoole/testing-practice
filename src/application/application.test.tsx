import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application component', () => {
    test('component renders correctly', () => {
        render(<Application />);

        const pageTitleEl = screen.getByRole('heading', {
            level: 1
        })
        expect(pageTitleEl).toBeInTheDocument();

        const sectionOneTitle = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionOneTitle).toBeInTheDocument();

        const paraEl = screen.getByText("Please fill in the form below");
        expect(paraEl).toBeInTheDocument();

        const nameEl = screen.getByRole('textbox', {
            name: "Name"
        });
        expect(nameEl).toBeInTheDocument();

        const nameEl2 = screen.getByLabelText("Name");
        expect(nameEl2).toBeInTheDocument();

        const bioEl = screen.getByRole('textbox', {
            name: "Bio"
        });
        expect(bioEl).toBeInTheDocument();
        
        const jobLocationEl = screen.getByRole("combobox");
        expect(jobLocationEl).toBeInTheDocument();

        const termsEl = screen.getByRole("checkbox");
        expect(termsEl).toBeInTheDocument();

        const submitEl = screen.getByRole("button");
        expect(submitEl).toBeInTheDocument();

        const termsEl2 = screen.getByLabelText("I agree with the terms and conditions");
        expect(termsEl2).toBeInTheDocument();
    })
})