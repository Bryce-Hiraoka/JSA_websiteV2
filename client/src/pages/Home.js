import React, { useState } from 'react';
import logo from '../assets/jsa.svg';
import axios from 'axios';
import HomeCarousel from '../components/HomeCarousel';
import Image from 'react-bootstrap/Image';

const Home = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/create-event', { name });
      setStatus('Event created successfully!');
    } catch (error) {
      setStatus('Failed to create event.');
      console.error(error);
    }
  };

  return (
    <div style={{ paddingTop: '58px' }}>
                <div style={{position: 'relative',                            
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}>
                    <HomeCarousel />
                    <h1 className="fade-in-text" style={{position: 'absolute', 
                                color: 'white', 
                                fontSize: '2vw',
                                transform: 'translateY(-950%)',
                                textShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Arial Rounded MT Bold'
                                }}>BU JAPANESE STUDENT ASSOCIATION</h1>
                    <Image className="fade-in-logo" src={logo} roundedCircle style={{
                    position: 'absolute', 
                    width: '17%', 
                    height: '30%',
                    transform: 'translateY(-70%)',
                    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.2)',
                        }} 
                    />
                    
                    </div>
            </div>
  );
};

export default Home;
