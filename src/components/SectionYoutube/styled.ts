import { css, styled } from 'styled-components';
import IconYoutube from '../Icons/IconYoutube';
import IconLinkedin from '../Icons/IconLinkedin';
import IconInstagram from '../Icons/IconInstagram';
import IconViewShow from '../Icons/IconViewShow';

const ContainerStyle = css`
  border-radius: 8px;
  padding: 10px;

  cursor: pointer;
  border: 0.1rem solid
    ${({ theme }) => theme.colors.blk_theme_toggle_btn_background};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 4px 4px
      ${({ theme }) => theme.colors.blk_theme_blue_light};
  }
`;

const SocialContainer = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    color: #fff;
    text-align: center;
  }
`;

export const ContainerVideo = styled.iframe.attrs({
  frameBorder: 0,
  allow:
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  allowFullScreen: true,
})`
  width: 100%;
  height: 280px;
  border-radius: 5px;
`;

export const ContainerTitleVideo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  width: 100%;
  margin-top: 15px;
  padding-bottom: 10px;

  h3 {
    color: ${({ theme }) => theme.colors.blk_theme_contrast};
    width: 95%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 1.2rem;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    background: ${({ theme }) => theme.colors.blk_theme_btn_bg};
    border-radius: 5px;
    height: 100%;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      gap: 10px;
    }
  }
`;
export const ContainerDescriptionVideo = styled.div`
  height: 140px;
  padding-top: 10px;
  p {
    text-align: start;
    color: ${({ theme }) => theme.colors.blk_theme_text_code};

    display: -webkit-box;
    -webkit-line-clamp: 7;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 750px;
  width: 100%;
  flex: 1;
  gap: 20px;
  padding: 0rem 6rem;
`;

export const ContainerPrimary = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const VideoPrimary = styled.div`
  ${ContainerStyle}
  width: 100%;
  height: 510px;
`;

export const ContainerSocial = styled.div`
  width: 100%;
  height: 220px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialSection = styled.div`
  ${ContainerStyle}
  height: 100%;
  flex: 1;
`;

export const ContainerYoutube = styled.div`
  ${SocialContainer}
  background: red;
`;

export const ContainerLinkedIn = styled.div`
  ${SocialContainer}
  background: #5865f2;
`;

export const ContainerInstagram = styled.div`
  ${SocialContainer}
  background: #9147ff;
`;

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 100%;
  gap: 20px;
`;

export const VideoSecondary = styled.div`
  ${ContainerStyle}
  width: 100%;
  height: 50%;
`;

const IconStyle = css`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  fill: #fff;
`;

export const YotubeIcon = styled(IconYoutube)`
  ${IconStyle}
`;

export const LinkedInIcon = styled(IconLinkedin)`
  ${IconStyle}
`;

export const InstagramIcon = styled(IconInstagram)`
  ${IconStyle}
  color: #fff;
`;

export const ViewIcon = styled(IconViewShow)`
  fill: ${({ theme }) => theme.colors.blk_thmee_background};
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
`;
