import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Form from './components/Form';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

library.add(faPhoneAlt);
library.add(faMapMarker);
library.add(faEnvelope);
library.add(faBars);

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Background />
      <Form />
      <Partners />
      <Footer />
    </div>
  )
}
