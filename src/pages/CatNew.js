import React from "react"
import { Form, FormGroup, Input, Button, Label } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const CatNew = ({createCat}) => {
    const navigate = useNavigate()
    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        favorite_song: "",
        pineapple_on_pizza: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCat({ ...newCat, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        createCat(newCat)
        navigate("/catindex")
    }

    return(
        <>
        <h1 className="redboxshow">Become a Blusher!</h1>

        <Form className="form">
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" onChange={handleChange} value={newCat.name} placeholder="name"/>
        </FormGroup>
        <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" onChange={handleChange} value={newCat.age} placeholder="age"/>
        </FormGroup>
        <FormGroup>
            <Label for="favorite_song">Favorite Song</Label>
            <Input type="text" name="favorite_song" onChange={handleChange} value={newCat.favorite_song} placeholder="favorite song"/>
        </FormGroup>
        <FormGroup>
            <Label for="pineapple_on_pizza">Pineapple On Pizza</Label>
            <Input type="text" name=" pineapple_on_pizza" onChange={handleChange} value={newCat.pineapple_on_pizza} placeholder="pineapple on pizza"/>
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">What do you enjoy doing?</Label>
            <Input type="textarea" name="enjoys" onChange={handleChange} value={newCat.enjoys} placeholder="what do you enjoy doing?"/>
        </FormGroup>
        <FormGroup>
            <Label for="image">Show us your face?</Label>
            <Input type="url" name="image" onChange={handleChange} value={newCat.image} placeholder="Show us your face"/>
        </FormGroup>
        <Button className="buttonhome" onClick={handleSubmit} name="submit">Become a Blusher</Button>
        </Form>
        <br></br>
        
        
        </>
    )
}

export default CatNew