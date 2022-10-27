import NotFound from './NotFound'
import {render, screen} from '@testing-library/react'

describe("<NotFound/>", ()=> {
    test("NotFound renders without error", ()=> {

        render(
            <NotFound/>
        )
        const element = screen.getByAltText("404 error")
        expect(element).toBeInTheDocument()
    })
})