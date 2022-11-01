import React from "react"
import { useParams } from "react-router-dom"
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"
import { NavLink } from "react-router-dom"

const CatShow = ({cats}) => {
    console.log("cat arrays:", cats)
    const {id}= useParams()
    console.log("id from params:", id)
    // let showCat = cats?.find((cat)=>{console.log("showcat cat:", cat.id)})
    let showCat = cats?.find((cat) => cat.id === +id)
    console.log("show cat:",showCat)
    return(
        <>
            <h1>Our Blushers!</h1>
                {showCat && 
                <Card style={{ width: '18rem' }}>
                <img src={showCat.image} alt="image of eligible feline"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            {showCat.name}
                        </CardTitle>
                    <CardSubtitle className="mb-2 text muted" tag="h6">
                        age: {showCat.age}
                    </CardSubtitle>
                    </CardBody>
                </Card>
                }
                <Button> 
                    <NavLink to={`/catedit/${showCat.id}`}>
                        Update this cat 
                    </NavLink>
                </Button>
        </> 
    )
}

export default CatShow