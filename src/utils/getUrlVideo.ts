export const getVideoData = async (
  videoId: string,
  apiKey: string
) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.title;
      const videoUrl = `https://www.youtube.com/embed/${videoId}`;
      const viewCount = data.items[0].statistics.viewCount;
      const description = data.items[0].snippet.description;

      return { videoTitle, videoUrl, viewCount, description };
    } else {
      throw new Error('Video not found');
    }
  } catch (error) {
    console.error('Error fetching video data:', error);
    throw error;
  }
};

export const getLatestVideos = async (
  channelId: string,
  apiKey: string,
  maxResults: number = 3
) => {
  const playlistId = await getChannelUploadsPlaylistId(
    channelId,
    apiKey
  );
  const videos = await getPlaylistVideos(
    playlistId,
    apiKey,
    maxResults
  );
  return videos;
};

const getChannelUploadsPlaylistId = async (
  channelId: string,
  apiKey: string
) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${apiKey}&part=contentDetails`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return (
    data.items[0]?.contentDetails?.relatedPlaylists?.uploads || null
  );
};

const getPlaylistVideos = async (
  playlistId: string,
  apiKey: string,
  maxResults: number
) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&part=snippet&maxResults=${maxResults}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const videoIds = data.items
    .map((item: any) => item.snippet?.resourceId?.videoId)
    .filter(Boolean);
  const videos = await Promise.all(
    videoIds.map((videoId: any) => getVideoData(videoId, apiKey))
  );

  return videos;
};
