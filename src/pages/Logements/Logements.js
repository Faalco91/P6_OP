import '../Logements/Logements.scss';
//Navigate est utilisé pour effectuer une navigation conditionnelle
//c'est-à-dire pour rediriger l'utilisateur vers une autre page/route en fonction d'une condition donnée.
import { Navigate } from 'react-router-dom';
//permet de récupérer les paramètres de l'URL dans un composant React.
import { useParams } from 'react-router-dom';
import { logementsDatas } from '../../datas/data';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';

function Logements() {
    //Ici useParams retourne un objet contenant les valeurs de id à partir des paramètres de l'URL.
    //Ce qui permet par la suite de récupérer toutes les valeurs associées à id de manière dynamique.
    const { id } = useParams();

    const filteredData = logementsDatas.filter(log => log.id === id);

    if (filteredData.length === 0) {
        return <Navigate to="/erreur" />;
        }

    const generateStars = (note) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(<ul className='etoiles-list' key={i}>
                <li><svg className="etoiles-elements" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill={ note >= i+1 ?  "#FF6060" : "#E3E3E3"}/></svg>
                </li>
            </ul>);
        }
        return stars;
      };

    return (
        <div className='main'>
            {filteredData.map((log, index) => (
                <div className='logements' id={log.id} key={index}>
                    <Slideshow datas={log.photos} />
                    <div className='logements-main'>
                        <div className='logements-container'>
                            <div className='logements-presentation-1'>
                            <div className='logements-presentation-place'>
                                <h1>{log.title}</h1>
                                <p>{log.location}</p>
                            </div>

                            <div className='logements-motclés'> 
                                    <ul className='motclés-list'>
                                        {log.motsclés.map((motclé, index) => (
                                            <li className='motclés-elements' key={index}> {motclé} </li>
                                        ))}
                                    </ul>
                                </div>
                        
                            </div>
                            <div className='logements-presentation-2'>
                        <div className='logements-presentation-hebergeur'>
                                <p id="name">{log.héberger.name}</p>
                                <img className='img-hebergeur' src={log.héberger.image} alt="hébergeur" />
                            </div>
                            <div className='logements-note'>
                                {generateStars(log.note)}
                            </div>
                            </div>
                        </div>
                        <div className='logements-presentation-3'>               
                            <Collapse title="Descriptions">
                                    <p id="description-content"> {log.description} </p>                            </Collapse>
                            <Collapse title="Équipements">
                                <ul className='presentation-content'>
                                    {log.équipements.map((info, index) => (
                                        <li id="presentation-list" key={index}> {info} </li>
                                    ))}
                                </ul>
                        </Collapse>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Logements;
