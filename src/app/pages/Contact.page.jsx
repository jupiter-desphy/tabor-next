import React from 'react';
import GoogleMap from '../components/GoogleMap';
import PhoneNumber from '../components/PhoneNumber';

export default function Contact() {
  return (
    <div>
        <PhoneNumber />
        <GoogleMap width={'100%'} height={'300'} />
    </div>
  )
}
