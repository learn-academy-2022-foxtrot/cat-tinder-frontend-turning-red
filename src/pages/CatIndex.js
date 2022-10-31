import React from "react"
import {Card, CardBody, CardTitle, Button, NavLink } from "reactstrap"

const CatIndex = ({cats}) => {
   console.log(cats)
        return(
            <div >
                <h1 className="redboxshow">Our Blushers!</h1>
                {cats?.map((cat, index) => {
                    return(
                        <div className="blushercards"
                        key = {index}>
                            <Card   className="text-dark" style={{ width: '18 rem' }}>
                                <img src={cat.image} alt="image of eligible feline"/>
                                <CardBody>
                                    {/* LINK DOESNT WORK */}
                                    <NavLink to={`/catshow/${cat.id}`}>
                                        {cat.name}
                                    </NavLink>
                                    {cat.age}
                                </CardBody>
                            </Card>
                        </div>
                    )
                })}
            </div> 
        )
}
export default CatIndex