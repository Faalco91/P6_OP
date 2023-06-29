import { logementsDatas } from '../../datas/data.js';
import '../Card/Card.scss'

function Card() {
  const logementsData = logementsDatas.reduce((acc, log) => {
    if (!acc[log.title]) {
      acc[log.title] = [];
    }
    acc[log.title].push(log.cover);
    return acc;
  }, {});

  return (
    <div className='card'>
      {Object.entries(logementsData).map(([title, covers]) => (
        <div className='card-element' key={title}>
          <h1 className='card-title'>{title}</h1>
          {covers.map((cover, index) => (
            <img className='card-img' key={index} src={cover} alt={`Cover ${index}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Card;