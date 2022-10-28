import CatIndex from './CatIndex'
import {render, screen} from '@testing-library/react'
import mockCat from "../mockData"
import { clear } from '@testing-library/user-event/dist/clear'

describe("<CatIndex/>", ()=> {
    beforeEach(( ) => {
        render(<CatIndex cats={mockCat} />)
    })
    test("CatIndex renders without error", ()=> {
        screen.debug()
        const element = screen.getByText("Our Blushers!")
        screen.debug(element)
        expect (element).toBeInTheDocument()
    })
    test("renders cat cards", () => {
        mockCat.forEach(cat => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
            const catImage = screen.getAllByRole('img')
            expect(catImage).toBeVisible
        } )
    })
})