'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SelectedWorks = () => {
  const workItems = [
    {
      id: 1,
      title: "Redefining E-Commerce",
      image: "/assets/img/case/case-1.jpg",
      categories: ["Branding", "UI/UX"],
      delay: 200
    },
    {
      id: 2,
      title: "Design That Converts",
      image: "/assets/img/case/case-2.jpg",
      categories: ["Branding", "UI/UX"],
      delay: 400
    },
    {
      id: 3,
      title: "A New Brand Identity",
      image: "/assets/img/case/case-3.jpg",
      categories: ["Branding", "UI/UX"],
      delay: 600
    },
    {
      id: 4,
      title: "Business Card Design",
      image: "/assets/img/case/case-4.jpg",
      categories: ["Branding", "UI/UX"],
      delay: 800
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with blue title matching the image */}
        <div className="mb-12 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-4xl font-bold uppercase text-[#2563EB]">
              SELECTED <span className="font-light">WORKS</span>.
            </h2>
          </div>
          <div className="w-full md:w-auto">
            <Link 
              href="/portfolio" 
              className="inline-block px-5 py-3 bg-[#67E400] hover:bg-[#5cc700] rounded-full text-black font-medium text-sm"
            >
              ALL PROJECT →
            </Link>
          </div>
        </div>
        
        {/* Works Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {workItems.map((item) => (
            <div 
              key={item.id} 
              className="group animate-fadeIn"
              style={{
                animationDelay: `${item.delay}ms`
              }}
            >
              <div className="overflow-hidden bg-gray-200">
                <div className="relative aspect-[576/599] w-full">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-800 font-bold">576X599</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/portfolio/${item.id}`} className="hover:text-[#67E400] transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <div className="flex gap-2 text-sm">
                  {item.categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <Link 
                        href={`/category/${category.toLowerCase()}`}
                        className="text-gray-600 hover:text-[#67E400]"
                      >
                        {category}
                      </Link>
                      {index < item.categories.length - 1 && (
                        <span className="text-gray-400 mx-1">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SelectedWorks;