import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './ServiceCard.module.css';
import ArrowIcon from './ArrowIcon';

const ServiceCard = ({ title, performance, icon, link, index }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    // Remove active class from all cards
    const allCards = document.querySelectorAll(`.${styles.serviceCard}`);
    allCards.forEach(card => card.classList.remove(styles.active));
    
    // Add active class to the current card
    cardRef.current.classList.add(styles.active);
  };

  return (
    <div 
      ref={cardRef}
      className={`${styles.serviceCard} ${index === 0 ? styles.active : ''}`} 
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.text}>
        <span>{performance}</span>
        <h2>
          <Link href={link}>{title}</Link>
        </h2>
      </div>
      <Link href={link} className={styles.icon}>
        <ArrowIcon />
      </Link>
      <div className={styles.image}>
        <div className={styles.circleWrapper}>
          <div className={styles.rotateAnimation}>
            <img src={icon} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
  