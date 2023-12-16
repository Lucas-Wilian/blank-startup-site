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
            <C.ContainerYoutube>
              <C.YotubeIcon />
              <p>Increva-se no Youtube </p>
            </C.ContainerYoutube>
          </C.SocialSection>
          <C.SocialSection>
            <C.ContainerLinkedIn>
              <C.LinkedInIcon />
              <p>Veja nosso LinkedIn</p>
            </C.ContainerLinkedIn>
          </C.SocialSection>
          <C.SocialSection>
            <C.ContainerInstagram>
              <C.InstagramIcon />
              <p>Siga-nos no Instagram</p>
            </C.ContainerInstagram>
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
