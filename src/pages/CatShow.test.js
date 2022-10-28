import CatShow from './CatShow'
import {render, screen} from '@testing-library/react'
import mockCat from "../mockData"
import { MemoryRouter, Route, Routes} from "react-router-dom"

describe ("<CatShow/>", () => {
    it("renders without crashing", () => {
        render (
            <MemoryRouter initialEntries={["/CatShow/1"]}>
            <Routes>
                <Route path="/CatShow/:id" element={<CatShow cats={mockCat}/>} />
            </Routes>

            </MemoryRouter>
        )
        const showRender = screen.getByText(/hanging/i)
        expect(showRender).toHaveTextContent("enjoys: 'hanging with friends, drawing, and cute boys!'")
    } )
})