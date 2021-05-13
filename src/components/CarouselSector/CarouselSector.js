import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import { Button } from 'semantic-ui-react'
import { allPosts } from '../../api/account';
import Content from '../Content'
import './CarouselSector.scss';


const CarouselSector = props => {

    const { data } = props;
    const [showGenres, setShowGenres] = useState([]);
    const [title, setTitle] = useState('')

    // Creamos la configuracion para nuestro slider de imagenes
    const settings = {
        className: "carousel-sectors",
        dots: false, // dots son los puntos que se muestran siempre debajo del slider
        infinity: true, // infinity indica si cuando el slider llegue al final, comience de nuevo
        speed: 500,
        slidesToShow: 4,
        swipeToSlider: true,
    };

    const sector_data = data.filter( d => d.subgenres.length > 0 );

    const changeSubgenres = () => {
    
        

    }

    return (
        <>

            <Slider { ...settings }>
                {

                    sector_data.map( sd => (
                        <div key={sd.name} onClick={() => {

                            // Guardamos los subgeneros para mostrarlos
                            setShowGenres(sd.subgenres);

                            // Cambiamos el titulo 
                            setTitle(sd.name);

                        } } >
                            <SectorTitle sector={sd} />
                        </div>
                    ))

                }
            </Slider>

            { showGenres.length > 0 ? 
                <div onClick={ changeSubgenres }>
                     <SectorGenres title={title} data={showGenres} allPosts={allPosts} />
                </div> : 
                <h1 style={{ textAlign: 'center', marginTop: '50px', fontSize: '40px' }}>Elige una categoria</h1> }
        </>
    )
}

function SectorTitle(props) {

    const { sector } = props;

    

    return(
        <>
            <div 
                className='sector_container' 
                style={{ backgroundImage: `url(${sector.sector_image})` }}
                >

                <div className='sector_container_fade'>
                    <h1>{ sector.name }</h1>
                </div>

            </div>

        </>
    )

}

function SectorGenres(props) {

    const { data, title, allPosts } = props;
    const [subgenre, setSubgenre] = useState(null)

    useEffect(() => {

        setSubgenre('')

    }, [title])

    return (
        <>
            <div className='sector_subgenres'>
                {
                    data.map( sb => (

                        <Button key={sb} onClick={ () => setSubgenre(sb) } > { sb } </Button>

                    ))
                }
            </div> 

            <div className='sector_title'>
                <h1 onChange={() => console.log('object')}>
                    { title }
                </h1>

                <label> { subgenre ? subgenre : null } </label>

            </div>

            <Content allPosts={allPosts} />

        </>
    )

}

export default CarouselSector;
