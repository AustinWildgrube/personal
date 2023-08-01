'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PlayCircle } from 'react-feather';
import useSWR from 'swr';

import fetcher from '&/lib/fetcher';
import SpotifyLogo from '&/public/screenshots/spotify-logo.png';

interface SpotifyNowPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export function Spotify(): JSX.Element | null {
  const { data, isLoading } = useSWR<SpotifyNowPlaying>('/api', fetcher);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (!data) return null;

  return (
    <div className="fixed bottom-2 right-2 cursor-pointer z-50">
      {isExpanded && !isLoading && data.isPlaying ? (
        <div
          className="flex h-44 w-80 items-center rounded-2xl border border-[#00000014] bg-[#EDFCF3] p-4 shadow transition-all hover:bg-[#E7F9EE] lg:w-96"
          onClick={() => setIsExpanded(false)}>
          <div className="mr-4 flex w-3/5 grow flex-col justify-between">
            <span className="block flex h-10 w-10 items-center justify-center rounded-lg bg-[#1ed760] shadow">
              <Image className="h-8 w-8" src={SpotifyLogo} alt="Spotify Logo" />
            </span>

            <h3 className="mt-2 truncate text-sm font-medium text-black">{data.title}</h3>
            <span className="truncate text-xs text-black">{data.artist}</span>

            <Link
              className="mt-4 flex w-36 items-center justify-center rounded-3xl bg-[#1ed760] p-1 text-sm text-black shadow"
              href={data.songUrl}
              target="_blank">
              <PlayCircle className="mr-1" size={18} />
              Play For Me Too
            </Link>
          </div>

          <div className="relative h-32 w-32 shrink-0">
            <Image
              className="rounded-lg"
              src={data.albumImageUrl}
              placeholder="blur"
              blurDataURL="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
              alt={`${data.title} album art`}
              fill
            />
          </div>
        </div>
      ) : (
        <div
          className="flex items-center rounded-3xl border border-[#00000014] bg-[#1ed760] py-1.5 px-4 shadow hover:bg-green-600"
          onClick={() => setIsExpanded(true)}>
          <Image className="h-8 w-8" src={SpotifyLogo} alt="Spotify logo" />
          <span className="ml-2 select-none text-sm text-black">
            {data.isPlaying ? 'Now Playing..' : 'Not Currently Listening..'}
          </span>
        </div>
      )}
    </div>
  );
}
