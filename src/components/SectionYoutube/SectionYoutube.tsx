import React from 'react';
import * as C from './styled';

export default function SectionYoutube() {
  return (
    <C.Container>
      <C.ContainerPrimary>
        <C.VideoPrimary>
          <p>Video Principal</p>
        </C.VideoPrimary>
        <C.ContainerSocial>
          <C.SocialSection>
            <p>Youtube</p>
          </C.SocialSection>
          <C.SocialSection>
            <p>LinkIn</p>
          </C.SocialSection>
          <C.SocialSection>
            <p>Instagram</p>
          </C.SocialSection>
        </C.ContainerSocial>
      </C.ContainerPrimary>
      <C.ContainerSecondary>
        <C.VideoSecondary>
          <p>Video Secundario</p>
        </C.VideoSecondary>
        <C.VideoSecondary>
          <p>Video Secundario</p>
        </C.VideoSecondary>
      </C.ContainerSecondary>
    </C.Container>
  );
}
