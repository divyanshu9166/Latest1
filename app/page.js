import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Hero1 from "@/components/sections/Hero1"
import Product1 from "@/components/sections/Product1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import Watch1 from "@/components/sections/Watch1"
import TeamSection from "@/components/sections/TeamSection"

import ServicesSection from "@/components/services/ServicesSection"
import { ParallaxScrollWith3DEffect } from "@/components/sections/ParallaxScrollWith3DEffect"
import SelectedWorks from "@/components/sections/SelectedWorks"
import dynamic from 'next/dynamic'

// Dynamic import with SSR disabled for client-only components
const SmoothCursor = dynamic(() => import('@/components/ui/smooth-cursor'), {
    ssr: false
  })

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div className="position-relative overflow-hidden">

                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <SmoothCursor />
                    <Hero1 />
                    
                    <Product1 />
                   <h2>"welcome to our world"</h2>
                   <h3>changing </h3>
                    <Service1 />
                    <TextSLider1 />
                    <ParallaxScrollWith3DEffect />
                    <Watch1 />
                    <Team1 />
                    <TextSLider2 />
                    <SelectedWorks />
                    <Testimonial1 />
                    <Blog1 />
                    <ServicesSection />
                    <TextSLider3 />
                    <TeamSection/>
                    
                    
                </div>
            </Layout>
        </>
    )
}
