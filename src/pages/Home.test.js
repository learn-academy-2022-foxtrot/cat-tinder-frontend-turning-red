import Home from './Home'
import {render, screen} from '@testing-library/react'

describe("<Home/>", ()=> {
    test("Home renders without error", ()=> {

        render(
            <Home/>
        )
        const element = screen.getByText("Home!")
        expect(element).toBeInTheDocument()
    })
})