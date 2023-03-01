import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

// jest.mock('react-i18next', () => ({
//     useTranslation: () => {
//         return {
//             t: (str: string) => str,
//             i18n: {
//                 changeLanguage: async () => await new Promise(() => {
//                 })
//             }
//         };
//     },
//     initReactI18next: {
//         type: '3rdParty',
//         init: () => {
//         }
//     }
// }))

describe('Sidebar component tests', () => {
    // const env = process.env
    //
    // beforeEach(() => {
    //     jest.resetModules()
    //     process.env = { ...env }
    //     process.env.__IS_DEV__ = 'false'
    // })

    test('Sidebar will be render in the document', () => {
        render(<Sidebar/>)
        screen.debug()
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar will be collapsed', () => {
        render(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    })


    //
    // afterEach(() => {
    //     process.env = env
    // })
})
