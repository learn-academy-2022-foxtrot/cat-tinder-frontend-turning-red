import {React, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Button, Label } from "reactstrap"



const catEdit = ({cats, updateCat}) => {
    const {id} = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id) 
    
    const [editCat, setEditCat] = useState({
        name: currentCat.name,
        age: currentCat.age,
        favorite_song: currentCat.favorite_song,
        pineapple_on_pizza: currentCat.pineapple_on_pizza,
        enjoys: currentCat.enjoys,
        image: currentCat.image
    })

    const navigate = useNavigate()

    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate("/catindex")
    }
    
    
    const handleChange = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }
   

    return(
        <>
        <h1 className="redboxshow">Edit a Blusher!</h1>

        <Form className="form">
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" onChange={handleChange} defaultValue={currentCat.name} placeholder="name"/>
        </FormGroup>
        <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" onChange={handleChange} defaultValue={currentCat.age} placeholder="age"/>
        </FormGroup>
        <FormGroup>
            <Label for="favorite_song">Favorite Song</Label>
            <Input type="text" name="favorite_song" onChange={handleChange} defaultValue={currentCat.favorite_song} placeholder="favorite song"/>
        </FormGroup>
        <FormGroup>
            <Label for="pineapple_on_pizza">Pineapple On Pizza</Label>
            <Input type="text" name=" pineapple_on_pizza" onChange={handleChange} defaultValue={currentCat.pineapple_on_pizza} placeholder="pineapple on pizza"/>
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">What do you enjoy doing?</Label>
            <Input type="textarea" name="enjoys" onChange={handleChange} defaultValue={currentCat.enjoys} placeholder="what do you enjoy doing?"/>
        </FormGroup>
        <FormGroup>
            <Label for="image">Show us your face?</Label>
            <Input type="url" name="image" onChange={handleChange} defaultValue={currentCat.image} placeholder="Show us your face"/>
        </FormGroup>
        <Button className="buttonhome" onClick={handleSubmit} name="submit">Update a Blusher</Button>
        </Form>
        <br></br>
        
        
        </>
    )
}

export default CatEdit