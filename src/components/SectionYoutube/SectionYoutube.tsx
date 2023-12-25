import React, { useEffect, useState } from 'react';
import * as C from './styled';
import { getLatestVideos } from '@/utils/getUrlVideo';
import Skeleton from 'react-loading-skeleton';

interface VideoData {
  videoTitle: string;
  videoUrl: string;
  viewCount: string;
  description: string;
}

export default function SectionYoutube() {
  const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [latestVideos, setLatestVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      try {
        setLoading(true);
        if (channelId && apiKey) {
          const videos = await getLatestVideos(channelId, apiKey, 3);
          setLatestVideos(videos);
        } else {
          console.error('Channel ID is undefined');
        }
      } catch (error) {
        console.error('Erro ao obter vídeos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideos();
  }, [channelId, apiKey]);

  return (
    <C.Container>
      <C.ContainerPrimary>
        <C.VideoPrimary>
          {loading ? (
            <>
              <Skeleton
                style={{
                  width: '100%',
                  height: '280px',
                }}
              />
              <C.ContainerTitleVideo>
                <h3>
                  <Skeleton
                    style={{
                      height: '35px',
                    }}
                  />
                </h3>

                <Skeleton
                  style={{
                    width: '100px',
                    height: '40px',
                  }}
                />
              </C.ContainerTitleVideo>
              <C.ContainerDescriptionVideo>
                <p>
                  <Skeleton
                    count={6}
                    style={{
                      marginBottom: '5px',
                      height: '1.1rem',
                    }}
                  />
                </p>
              </C.ContainerDescriptionVideo>
            </>
          ) : (
            <>
              <C.ContainerVideo
                src={latestVideos[0].videoUrl}
                title={latestVideos[0].videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              />
              <C.ContainerTitleVideo
                style={{
                  borderBottom:
                    ' solid 0.1rem rgba(155, 155, 155, 0.2)',
                }}
              >
                <h3>{latestVideos[0].videoTitle}</h3>
                <section>
                  <span>
                    <C.ViewIcon />
                    {latestVideos[0].viewCount}
                  </span>
                </section>
              </C.ContainerTitleVideo>
              <C.ContainerDescriptionVideo>
                <p>{latestVideos[0].description}</p>
              </C.ContainerDescriptionVideo>
            </>
          )}
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
          {loading ? (
            <>
              <Skeleton
                style={{
                  width: '100%',
                  height: '280px',
                }}
              />
              <C.ContainerTitleVideo>
                <h3>
                  <Skeleton
                    style={{
                      height: '35px',
                    }}
                  />
                </h3>

                <Skeleton
                  style={{
                    width: '100px',
                    height: '40px',
                  }}
                />
              </C.ContainerTitleVideo>
            </>
          ) : (
            <>
              <C.ContainerVideo
                src={latestVideos[1].videoUrl}
                title={latestVideos[1].videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              />
              <C.ContainerTitleVideo>
                <h3>{latestVideos[1].videoTitle}</h3>

                <section>
                  <span>
                    <C.ViewIcon />
                    {latestVideos[1].viewCount}
                  </span>
                </section>
              </C.ContainerTitleVideo>
            </>
          )}
        </C.VideoSecondary>
        <C.VideoSecondary>
          {loading ? (
            <>
              <Skeleton
                style={{
                  width: '100%',
                  height: '280px',
                }}
              />
              <C.ContainerTitleVideo>
                <h3>
                  <Skeleton
                    style={{
                      height: '35px',
                    }}
                  />
                </h3>

                <Skeleton
                  style={{
                    width: '100px',
                    height: '40px',
                  }}
                />
              </C.ContainerTitleVideo>
            </>
          ) : (
            <>
              <C.ContainerVideo
                src={latestVideos[2].videoUrl}
                title={latestVideos[2].videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              />
              <C.ContainerTitleVideo>
                <h3>{latestVideos[2].videoTitle}</h3>

                <section>
                  <span>
                    <C.ViewIcon />
                    {latestVideos[2].viewCount}
                  </span>
                </section>
              </C.ContainerTitleVideo>
            </>
          )}
        </C.VideoSecondary>
      </C.ContainerSecondary>
    </C.Container>
  );
}
