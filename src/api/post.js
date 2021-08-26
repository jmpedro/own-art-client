import { URL_PATH } from "../utils/constants";


// Obtenemos todas las publicaciones
export const getAllPostApi = (url) => {

    return fetch(url)
    .then(data =>{
        return data.json();
    })
    .catch(err => {
        return err;
    })

}

// Obtener las publicaciones de un usuario
export const getPostFromUserApi = async (name) => {

    try {
        
        const response = await fetch(`${URL_PATH}/${name}`);
        const result = await response.json();

        return result;

    } catch (error) {
        
        return error;

    }

}

export const publication = {
    "views_publication": {
        "categories": [
            "Photoshop",
            "After Effects"
        ],
        "state": false,
        "createdAt": "2021-03-15T16:43:57.775Z",
        "ratings": 2,
        "views": 48,
        "labels": [
            "ciencia",
            "paisajes",
            "verano",
            "playa"
        ],
        "sectors": [],
        "chats_id": [
            {
                "createdAt": "2021-04-10T10:08:36.795Z",
                "readed": true,
                "_id": "607179bfc7b79c02e807e69e",
                "name": "jjmpedro",
                "message": "Hoola test 6",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/jjmpedro/e11a6eec-f940-4190-b63e-c8170f66728c.PNG",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            },
            {
                "createdAt": "2021-04-10T11:20:09.751Z",
                "readed": true,
                "_id": "607189f189e9e8275063d4fc",
                "name": "jjmpedro",
                "message": "Hola de nuevo",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/jjmpedro/e11a6eec-f940-4190-b63e-c8170f66728c.PNG",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            },
            {
                "createdAt": "2021-04-10T11:45:42.447Z",
                "readed": true,
                "_id": "60718feb78d261019c8f4703",
                "name": "Test 5",
                "message": "Hola soy test 5",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/defaults-image/user-no-image.png",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            },
            {
                "createdAt": "2021-04-10T13:12:03.359Z",
                "readed": true,
                "_id": "6071a43125370d2d00b1a848",
                "name": "Test 5",
                "message": "Hola soy test 5 de nuevo",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/defaults-image/user-no-image.png",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            },
            {
                "createdAt": "2021-04-10T13:16:17.957Z",
                "readed": true,
                "_id": "6071a58711cae840a00a0824",
                "name": "Test 5",
                "message": "Hola soy test 5 de nuevo",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/defaults-image/user-no-image.png",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            },
            {
                "createdAt": "2021-04-18T16:32:46.037Z",
                "readed": false,
                "_id": "607c5f34bbc9d71dbc74ce52",
                "name": "Test 6",
                "message": "Hola test 5 soy test 6",
                "url_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/defaults-image/user-no-image.png",
                "post_id": "604f8ed5574f9f11983da823",
                "__v": 0
            }
        ],
        "_id": "604f8ed5574f9f11983da823",
        "title": "Playas de Maldivas",
        "url_image": "https://i.pinimg.com/originals/8b/0f/01/8b0f01f2452e65380517b174c651e575.jpg",
        "description": "Paisaje de verano",
        "user_id": "6047d39737a3163c2402807f",
        "__v": 0
    },
    "views": 48
}