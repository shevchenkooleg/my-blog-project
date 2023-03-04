import { getCounterValue } from "entities/Counter/model/selectors/getCounterValue/getCounterValue";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { componentRender } from "shared/lib/test/componentRender/componentRender";
import { screen } from "@testing-library/react";
import { Counter } from "entities/Counter";
import { userEvent } from "@storybook/testing-library";


describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
    test('counter value should be incremented', () => {
        componentRender(<Counter/>, { initialState: { counter: { value: 10 } } })
        const incrementBtn = screen.getByTestId('increment-Btn');
        expect(screen.getByTestId('counterValue')).toBeInTheDocument()
        userEvent.click(incrementBtn)
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
        screen.debug()
    })
    test('counter value should be decremented', () => {
        componentRender(<Counter/>, { initialState: { counter: { value: 10 } } })
        const incrementBtn = screen.getByTestId('decrement-Btn');
        expect(screen.getByTestId('counterValue')).toBeInTheDocument()
        userEvent.click(incrementBtn)
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
        screen.debug()
    })
})
