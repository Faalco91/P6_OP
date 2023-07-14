import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import '../Slideshow/Slideshow.scss'

const Slideshow = ({datas}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();
    const currentId = location.pathname.split('/').pop();

    useEffect(() => {
        setCurrentSlide(datas.findIndex(log => log.id === currentId));
      }, [currentId, datas]);

      const nextId = datas[(currentSlide + 1) % datas.length].id;
      const previousId = datas[(currentSlide - 1 + datas.length) % datas.length].id;
    
    

    return(
        <div className='images-caroussel'>
            <Link to={`/Logements/${previousId}`}> <span className='arrow left' /> </Link>
            {datas.map((log, index) => {
                const slideClasses = `slide ${index === currentSlide ? 'active' : 'slide-hidden'}`;
                return (
                    <img src={log.cover} alt={log.id} key={index} className={slideClasses}/>
                );
            })}
            <span className='indicators'>
            {datas.map((_, index) => {
            const indicatorClasses = `indicator ${index === currentSlide ? '' : 'indicator-inactive'}`;
            return <button key={index} onClick={() => setCurrentSlide(index)} className={indicatorClasses}></button>
            })}
            </span>
            <Link to={`/Logements/${nextId}`}> <span className='arrow right'/> </Link>
        </div>
    )
};

export default Slideshow;