import Footer from './Footer'
import {render, screen} from '@testing-library/react'
import { BrowserRouter} from "react-router-dom"
import userEvent from '@testing-library/user-event'

describe("<Footer/>", ()=> {
    test("Footer renders without error", ()=> {

        render(
            <BrowserRouter>
            <Footer/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText("CopyRight Lyssa & Michy")
        expect(indexLink).toBeInTheDocument
    })
})