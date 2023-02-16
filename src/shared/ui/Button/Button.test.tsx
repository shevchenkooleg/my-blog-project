import { Button, ThemeButton } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";


describe('Button tests', () => {
    test('button will be render in the document', () => {
        render(<Button>TEXT</Button>)
        expect(screen.getByText('TEXT')).toBeInTheDocument()
    })
    test('button will be render with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>)
        expect(screen.getByText('TEXT')).toHaveClass('clear')
        screen.debug()
    })
})
