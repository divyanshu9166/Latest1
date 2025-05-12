"use client"
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Content Marketing",
      performance: "Excellent Performance",
      icon: "/images/service/1.png",
      link: "/services/content-marketing"
    },
    {
      title: "Website Designing",
      performance: "Excellent Performance",
      icon: "/images/service/2.png",
      link: "/services/website-designing"
    },
    {
      title: "E-mail Marketing",
      performance: "Excellent Performance",
      icon: "/images/service/3.png",
      link: "/services/email-marketing"
    },
    {
      title: "Webflow Development",
      performance: "Excellent Performance",
      icon: "/images/service/4.png",
      link: "/services/webflow-development"
    },
    {
      title: "Social Media Marketing",
      performance: "Excellent Performance",
      icon: "/images/service/5.png",
      link: "/services/social-media-marketing"
    },
    {
      title: "Digital Marketing",
      performance: "Excellent Performance",
      icon: "/images/service/6.png",
      link: "/services/digital-marketing"
    }
  ];

  useEffect(() => {
    // Set initial active item
    const firstItem = document.querySelector(`.${styles.serviceCard}`);
    if (firstItem) {
      firstItem.classList.add(styles.active);
    }

    // Initialize animations if gsap is available
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      const { ScrollTrigger } = gsap;
      
      // Fade in animation for the section
      gsap.to(`.${styles.fadeBottom}`, {
        scrollTrigger: {
          trigger: `.${styles.fadeBottom}`,
          start: "top center+=300",
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
          each: 0.2,
        },
      });

      // Animation for each service card
      gsap.utils.toArray(`.${styles.col}`).forEach((box) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: "top bottom-=100px",
          },
          y: 180,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out"
        });
      });
    }
  }, []);

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={`${styles.title} ${styles.fadeBottom}`}>
          <h2>OUR <span>SERVICES</span></h2>
        </div>
        <div className={styles.row}>
          {services.map((service, index) => (
            <div key={index} className={styles.col}>
              <ServiceCard 
                title={service.title}
                performance={service.performance}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

