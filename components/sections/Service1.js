'use client'
import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import styles from './Service1.module.css'

const ArrowIcon = () => {
  return (
    <svg 
      width="15" 
      height="13" 
      viewBox="0 0 15 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
    >
      <path 
        d="M13.6875 6.93506L1.6875 6.93506" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.98438 1.30273L14.5281 6.49961L8.98438 11.6965" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Service1() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsRef = useRef([]);
    
    const services = [
        {
            id: 1,
            title: "Digitalization",
            performance: "Excellent Performance",
            description: "We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.",
            icon: "/assets/img/service/tab1.png",
            link: "/service-details"
        },
        {
            id: 2,
            title: "Modernization",
            performance: "Excellent Performance",
            description: "We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.",
            icon: "/assets/img/service/tab2.png",
            link: "/service-details"
        },
        {
            id: 3,
            title: "Accelerating Innovation",
            performance: "Excellent Performance",
            description: "We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.",
            icon: "/assets/img/service/tab3.png",
            link: "/service-details"
        },
        {
            id: 4,
            title: "Business consulting",
            performance: "Excellent Performance",
            description: "We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.",
            icon: "/assets/img/service/tab4.png",
            link: "/service-details"
        }
    ];

    useEffect(() => {
        // Initialize animations if gsap is available
        if (typeof window !== 'undefined' && window.gsap) {
            const gsap = window.gsap;
            
            // Animation for each service card
            gsap.utils.toArray(`.${styles.serviceCard}`).forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100px",
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: index * 0.1
                });
            });
        }
    }, []);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };
    
    return (
        <>
            <section className="service-section pt-space pb-space" style={{ backgroundColor: '#0A0906' }}>
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle">
                                Most <span className="fw-400">experienced</span> services
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    
                    {/* Services Cards in New Design */}
                    <div className="row">
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            {services.map((service, index) => (
                                <div 
                                    key={service.id}
                                    ref={el => cardsRef.current[index] = el}
                                    className={`${styles.serviceCard} ${index === activeIndex ? styles.active : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    <div className={styles.text}>
                                        <span className={styles.performance}>{service.performance}</span>
                                        <h2 className={styles.title}>
                                            <Link href={service.link} className={styles.titleLink}>
                                                {service.title}
                                            </Link>
                                        </h2>
                                    </div>
                                    
                                    <Link href={service.link} className={styles.arrowLink}>
                                        <ArrowIcon />
                                    </Link>
                                    
                                    <div className={`${styles.imageContainer} ${index === activeIndex ? styles.visible : ''}`}>
                                        <div className={styles.circleWrapper}>
                                            <div className={styles.rotateAnimation}>
                                                <img 
                                                    src={service.icon} 
                                                    alt={service.title} 
                                                    className={styles.serviceImage} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
