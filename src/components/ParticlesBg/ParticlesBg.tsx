import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particles-config';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        gap: 1,
      }}
    />
  );
}
