import './rental.scss';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import data from '../../data/data.json'
import Tags from '../../components/Tags/Tags';
import { FaStar } from "react-icons/fa6";
import CollapseList from '../../components/Collapse/Collapse';

/**
 * Renders the Rental component.
 *
 * @return {JSX.Element} The rendered Rental component.
 */
const Rental = () => {
  const { id } = useParams();
  const rental = data.find((rental) => rental.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!rental) {
      navigate("/error");
    }
  }, [id, rental, navigate]);
    
    if (!rental) {
      return null; 
    }
    

  const renderStars = ({ value }) => {
    const totalStars = 5;
    const stars = Array.from({ length: totalStars }, (_, index) => {
      return <FaStar key={index} className={index < value ? "star filled" : "star"} />;
    });

    return stars;
  };

  const collapseItems = [
    { title: 'Description', content: rental.description },
    { title: 'Équipements', content: rental.equipments },
  ];

  return (
    <main className='main-rental'>
      <Carrousel data={rental} />

      <header className='header-rental'>
        <section className='rental-info'>
          <h1 className='rental-title'>{rental.title}</h1>
          <p className='rental-location'>{rental.location}</p>
          <Tags tags={rental.tags} />
        </section>

        <section className='host-info'>
          <figure className='host'>
            <figcaption className='host-name'>{rental.host.name}</figcaption>
            <img src={rental.host.picture} alt={rental.host.name} className="host-img" />
          </figure>
          <figure className='rating'>
            <figcaption className='rating-stars'>
              {renderStars({ value: rental.rating })}
            </figcaption>
          </figure>
        </section>
      </header>
      <CollapseList items={collapseItems} housingClass='housing' ulHousingClass='housing-list' />
    </main>
  );
}

export default Rental;
