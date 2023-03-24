const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export const revalidate = 0;

const getAccessToken = async () => {
  if (!refresh_token || !client_id || !client_secret) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  });

  return response.json();
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
