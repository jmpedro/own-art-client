
// Obtenemos todos los usuarios
export const getAllUsersApi = async (url) => {

    try {
        
        const response = await fetch(url);
        const result = await response.json();

        return result;

    } catch (error) {
        
        return error;

    }

}

export const usersDB = {
    "finalFilters": [
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Madrid",
            "social_icons": [],
            "messages": [],
            "name": "Test 4",
            "email": "test4@gmail.com",
            "profile_image": "https://img.culturacolectiva.com/content_image/2019/3/28/1553818231428-que-es-el-arte-urbano-o-street-art.jpeg",
            "uid": "6047d38737a3163c2402807d"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Barcelona",
            "social_icons": [],
            "messages": [],
            "name": "Test 5",
            "email": "test5@gmail.com",
            "profile_image": "https://casaydiseno.com/wp-content/uploads/2018/11/im%C3%A1genes-en-blanco-y-negro.jpg",
            "uid": "6047d38f37a3163c2402807e"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 11,
            "total_ratings": 5,
            "ratings": [],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Sevilla",
            "social_icons": [],
            "messages": [],
            "name": "Test 6",
            "email": "test6@gmail.com",
            "profile_image": "https://elpais.com/elpais/imagenes/2014/09/01/eps/1409593678_272052_1409593791_noticia_grande.jpg",
            "uid": "6047d39737a3163c2402807f"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                "604f8ed5574f9f11983da823",
                "604fdc650fada224846a7d1e"
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [
                "6047d3b337a3163c24028083"
            ],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Granada",
            "social_icons": [],
            "messages": [],
            "name": "Test 7",
            "email": "test7@gmail.com",
            "profile_image": "https://www.dexpresionismo.es/wp-content/uploads/2018/10/arteydepresionprincipal.jpg",
            "uid": "6047d39f37a3163c24028080"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Jabalquinto",
            "social_icons": [],
            "messages": [],
            "name": "Test 8",
            "email": "test8@gmail.com",
            "profile_image": "https://revistadigital.inesem.es/diseno-y-artes-graficas/files/2014/07/arte-y-tecnolog%C3%ADa-1020x680.jpg",
            "uid": "6047d3a637a3163c24028081"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Malaga",
            "social_icons": [],
            "messages": [],
            "name": "Test 9",
            "email": "test9@gmail.com",
            "profile_image": "https://agustinfotografia.com/wp-content/uploads/2018/04/arte-y-cultura.png",
            "uid": "6047d3ac37a3163c24028082"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6047d39f37a3163c24028080",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Almeria",
            "social_icons": [],
            "messages": [],
            "name": "Test 10",
            "email": "test10@gmail.com",
            "profile_image": "https://www.caracteristicas.co/wp-content/uploads/2019/05/arte-4-e1589034215172.jpg",
            "uid": "6047d3b337a3163c24028083"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Valencia",
            "social_icons": [],
            "messages": [],
            "name": "Test 11",
            "email": "test11@gmail.com",
            "profile_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD42YXkxTTVMcKF5-4yi9i7cZss4LRvdgeag&usqp=CAU",
            "uid": "6047d3bc37a3163c24028084"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [
                0
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-03-09T19:54:34.735Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Cordoba",
            "social_icons": [],
            "messages": [],
            "name": "Test 12",
            "email": "test12@gmail.com",
            "profile_image": "https://www.fotoenred.com/wp-content/uploads/2018/02/sesionfotostumblr5(pp_w768_h512).jpg",
            "uid": "6047d3c137a3163c24028085"
        },
        {
            "role": "ADMIN_ROLE",
            "state": true,
            "google": false,
            "profile_views": 10,
            "total_ratings": 0,
            "ratings": [
                "604f8ed5574f9f11983da823",
                "604fdc650fada224846a7d1e"
            ],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [
                "6047d38737a3163c2402807d",
                "6047d39737a3163c2402807f",
                "6047d3ac37a3163c24028082",
                "6047d3b337a3163c24028083",
                "6047d38f37a3163c2402807e"
            ],
            "about_me": "",
            "createdAt": "2021-03-19T18:57:53.190Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "Jaen",
            "social_icons": [
                {
                    "_id": "607c7d2d7603b63a5418dc6d",
                    "name": "Twitter",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/twitter.png",
                    "__v": 0,
                    "url_website": "https://www.twitter.com/pedro_jesus29/"
                },
                {
                    "_id": "607c7daa5e5c331a3884ff6d",
                    "name": "Pinterest",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/pinterest.png",
                    "__v": 0
                },
                {
                    "_id": "607c7db85e5c331a3884ff6e",
                    "name": "Facebook",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/facebook.png",
                    "__v": 0
                },
                {
                    "_id": "607c7dc15e5c331a3884ff6f",
                    "name": "Instagram",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/instagram.png",
                    "__v": 0
                }
            ],
            "messages": [],
            "name": "jjmpedro",
            "email": "jjmpedro@gmail.com",
            "profile_image": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/jjmpedro/e11a6eec-f940-4190-b63e-c8170f66728c.PNG",
            "uid": "6054f48282611b0878100824"
        },
        {
            "role": "USER_ROLE",
            "state": true,
            "google": false,
            "profile_views": 0,
            "total_ratings": 0,
            "ratings": [],
            "followers": [
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
                "6054f48282611b0878100824",
            ],
            "followed": [],
            "about_me": "",
            "createdAt": "2021-04-06T16:15:53.820Z",
            "sectors": [
                "Programacion",
                "Diseño Gráfico",
                "Aplicaciones móviles"
            ],
            "categories": [],
            "url_website": "",
            "location": "",
            "social_icons": [
                {
                    "_id": "607c7d2d7603b63a5418dc6d",
                    "name": "Twitter",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/twitter.png",
                    "__v": 0,
                    "url_website": "https://www.twitter.com/fgmariia/"
                },
                {
                    "_id": "607c7daa5e5c331a3884ff6d",
                    "name": "Pinterest",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/pinterest.png",
                    "__v": 0,
                    "url_website": "https://www.pinterest.com/fgmariia/"
                },
                {
                    "_id": "607c7db85e5c331a3884ff6e",
                    "name": "Facebook",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/facebook.png",
                    "__v": 0
                },
                {
                    "_id": "607c7dc15e5c331a3884ff6f",
                    "name": "Instagram",
                    "url_icon": "https://portfolio-uploads-documents.s3.eu-west-3.amazonaws.com/icons/instagram.png",
                    "__v": 0
                }
            ],
            "messages": [],
            "name": "maria",
            "email": "mariafer@gmail.com",
            "profile_image": "https://4.bp.blogspot.com/-L4Q5l5Aws4o/WpdWuT3GpmI/AAAAAAAADQs/orX5dCrbUY8g1aroQndeVGcVC73eeGY2QCLcBGAs/s1600/Black%2BClover%2BWallpaper%2B15.jpg",
            "uid": "606c8942d7112936840fafe3"
        }
    ]
}
