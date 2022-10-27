import Header from './Header'
import {render, screen} from '@testing-library/react'
import { BrowserRouter} from "react-router-dom"
import userEvent from '@testing-library/user-event'

describe("<Header/>", ()=> {
    test("Header renders without error", ()=> {

        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText("Cat Edit")
        expect(indexLink).toBeInTheDocument
    })

    test("Header has clickable links", ()=> {
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        // goal: test click works on link
        userEvent.click(screen.getByText("Cat Edit"))
        expect(screen.getByText("Cat Edit")).toBeInTheDocument
       
    })
})