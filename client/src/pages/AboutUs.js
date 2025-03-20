import React, { Component } from 'react';
import Image from 'react-bootstrap/esm/Image';
import EboardCard from '../components/EboardCard';
import omatsuri_eboard from '../assets/omatsuri-eboard.jpg';
import spring_first_gen from '../assets/spring2024firstgen.JPG';

const officers = [
    { name: 'Theodore Chen', role: 'President', image: 'image1.jpg' },
    { name: 'Kohji Numata', role: 'Vice President', image: 'image2.jpg' },
    { name: 'Daniel Daly', role: 'Secretary', image: 'image1.jpg' },
    { name: 'Micah Chan', role: 'Treasurer', image: 'image2.jpg' },
    { name: 'Hugo Hasegawa', role: 'Internal Affairs Co-Director', image: 'image1.jpg' },
    { name: 'Elena Noda', role: 'Internal Affairs Co-Director', image: 'image2.jpg' },
    { name: 'Brandon Onitsuka', role: 'External Affairs Director', image: 'image2.jpg' },
    { name: 'Afiq Amjad Bin Khairir', role: 'Marketing Co-Director', image: 'image2.jpg' },
    { name: 'Miori Kino', role: 'Marketing Co-Director', image: 'image2.jpg' }
  ];

class About extends Component {
    render() {
        const presidentAndVicePresident = officers.filter(officer => ['President', 'Vice President'].includes(officer.role));
        const otherOfficers = officers.filter(officer => !['President', 'Vice President'].includes(officer.role));

        return (
            <div style={{ paddingTop: '58px', fontFamily: 'Arial Rounded MT Bold'}}>
                
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>What is JSA?</h1>
                        <p style={{ paddingLeft: '40px', paddingRight: '40px' }}>BUJSA aims to bridge the gap between all Japanese communities across BU, including but not limited to international Japanese, Japanese-Americans, and those interested in Japanese culture. BUJSA is dedicated to promoting greater Japanese awareness and culture through large-scale events for the community, general meetings, and collaborative events with other cultural groups on/off campus and other outside entities.</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <Image src={spring_first_gen} alt="Another Section" style={{ width: '100%' }} />
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <Image src={omatsuri_eboard} alt="About Us" style={{ width: '100%' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>Who is BUJSA E-Board?</h1>
                        <p style={{ paddingLeft: '40px', paddingRight: '40px' }}>We are so lit it's genuinely crazy</p>
                    </div>
                </div>
                    
                <div style={{ paddingTop: '60px', justifyContent: 'center', alignItems: 'center' }}>
                        <h1> BUJSA E-Board 23' - 24' </h1>
                </div>
                <div style={{ paddingTop: '20px',justifyContent: 'center', alignItems: 'center' }}>
                        <h3> OFFICERS</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {presidentAndVicePresident.map((member, index) => (
                        <EboardCard member={member} key={index} /> // use OfficerCard
                    ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {otherOfficers.map((member, index) => (
                        <EboardCard member={member} key={index} /> // use OfficerCard
                    ))}
                </div>
            </div>
        );
    }
}

export default About;