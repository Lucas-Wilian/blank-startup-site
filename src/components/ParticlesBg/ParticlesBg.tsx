import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particles-config';

export default function ParticlesBg() {
  return <Particles params={particlesConfig} />;
}
