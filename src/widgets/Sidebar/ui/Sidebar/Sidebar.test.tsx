import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { componentRender } from "shared/lib/test/componentRender/componentRender";



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
        componentRender(<Sidebar/>, { route: '/' })
        screen.debug()
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('Sidebar will be collapsed', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    })
    test('Sidebar will be collapsed', () => {
        componentRender(<Sidebar/>)
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
