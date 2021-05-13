import React, { useState } from 'react'
import { Segment, Grid, Button, Image, Input } from 'semantic-ui-react'
import './NewPost.scss'

// Campos del formulario
const showFields = [
    {
        "name_field": "Título",
        "key": "title"
    },
    {
        "name_field": "Categorías",
        "key": "categories"
    },
    {
        "name_field": "Etiquetas",
        "key": "labels"
    },
    {
        "name_field": "Descripción",
        "key": "description"
    },
]

const NewPost = props => {


    const [showImage, setShowImage] = useState(null);

    // Obtenemos el archivo seleccionado y lo guardamos en el estado
    const onChangeImage = (event) => {

        setShowImage(event.target.files[0]);

    }

    return (
        <div className='new-post'>
            
            <h1>Nueva publicación</h1>
            
            <Segment>

                <Image src={ showImage && URL.createObjectURL(showImage) } rounded />
                <Button as="label" htmlFor="archivo" type="button" primary>
                    Cargar archivo
                </Button>
                <input type="file" id="archivo" hidden onChange={(e) => onChangeImage(e)} />

                {/* Mostramos los campos del formulario */}
                {
                    showFields.map( field => (

                        <div key={field.key} className='new-post_fields'>

                            <label>{field.name_field}</label>
                            <Input placeholder={field.name_field} ></Input>

                        </div>

                    ) )
                }
                
                <div style={{ display: 'flex', width: '20%' }}>
                    <Button primary>Publicar</Button> 
                </div>
            
            </Segment>

        </div>
    )
}

export default NewPost
