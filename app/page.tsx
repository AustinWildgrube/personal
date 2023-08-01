import Image from 'next/image';
import Link from 'next/link';

import { Link as FeatherLink } from 'react-feather';

import Campfire from '&/components/experience/campfire';
import Enfront from '&/components/experience/enfront';
import Forge from '&/components/experience/forge';
import Travelry from '&/components/experience/travelry';
import Venuelytics from '&/components/experience/venuelytics';
import { Figure } from '&/components/figure';
import { SmallFigure } from '&/components/small-figure';
import { Accordion } from '&/components/ui/accordion';
import { Button } from '&/components/ui/button';
import CampfireImage from '&/public/screenshots/campfire/campfire.png';
import RaverBotImage from '&/public/screenshots/discord-logo.webp';
import EnfrontImage from '&/public/screenshots/enfront/enfront.png';
import ForgeImage from '&/public/screenshots/forge/forge.png';
import FSCodeImage from '&/public/screenshots/fs-code.png';
import TravelryImage from '&/public/screenshots/travelry/travelry.png';
import VenuelyticsImage from '&/public/screenshots/venuelytics/venuelytics.png';

export const revalidate = 0;

export const metadata = {
  title: 'Austin Wildgrube',
  description:
    'Full-stack developer, cat dad, and husband. Code and coffee by day, jet-setting and sightseeing by night. Missouri-based, world-inspired.',
  icons: {
    icon: '/favicon_io/favicon.ico',
  },
};

export default function Home(): JSX.Element {
  const getShuffledArray = (length: number): number[] => {
    const arr = Array.from({ length }, (_, i: number) => i + 1);

    // Fisher-Yates shuffle
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  return (
    <>
      <section className="pb-6 pt-20 lg:px-24 lg:pb-20 lg:pt-40">
        <h1 className="mb-6 text-4xl font-extrabold lg:text-6xl">Hey, I&apos;m Austin Wildgrube</h1>

        <p className="mb-6 max-w-6xl text-lg">
          As a passionate developer, I thrive on integrating my life experiences into my work. My love for traveling has
          given me a unique perspective on design and how it can be influenced by different cultures and landscapes.
          When I&apos;m not immersed in coding, you&apos;ll find me running marathons, being a cat dad, and cherishing
          time with my wife. I believe in the work hard, play hard mentality, and I&apos;m confident that my dedication
          and enthusiasm would be a valuable asset to your project.
        </p>

        <Link href="https://www.dropbox.com/scl/fi/smcttzlidbrv8b9b07g0q/resume.pdf" target="_blank" prefetch={false}>
          <Button as="span">
            <FeatherLink className="mr-2" size={18} /> View My Resume
          </Button>
        </Link>

        <div className="relative mt-32 h-96 overflow-hidden lg:mt-64">
          <div className="columns-3 gap-2 space-y-2 md:columns-4 lg:columns-8">
            {getShuffledArray(25).map((num: number, i: number) => (
              <div className="break-inside-avoid" key={i}>
                <Image
                  className="rounded-2xl border border-gray-200"
                  src={`/gallery/${num}.webp`}
                  height={200}
                  width={150}
                  alt={`Photo of my life #${i}`}
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white" />
        </div>
      </section>

      <section className="py-6 lg:py-20 lg:px-24">
        <h2 className="mb-20 text-3xl font-bold lg:text-5xl">Featured Work</h2>

        <Accordion type="single" collapsible>
          <Figure
            title="Travelry"
            description="My latest project, Travelry, reflects my love of travel. Having been fortunate enough to visit
            nine different countries, I wanted a way to preserve all of my cherished memories. Travelry is a
            pocket-sized travel diary that allows you to create albums and share your journeys with others,
            providing users with an innovative social media experience."
            technologies={['React Native', 'Supabase', 'Mapbox']}
            dates="January 2022 - Present"
            type="personal"
            src={TravelryImage}
            alt="Travelry app screenshots"
            extraContent={<Travelry />}
            githubLink="https://github.com/AustinWildgrube/travelry"
          />

          <Figure
            title="Campfire Design System"
            description="Campfire has been the most significant project I have worked on at Momentus. Starting from my days as an
            intern, I noticed a prevalent frustration among developers regarding the use of Angular Material. Developers were altering
            Material components to fit the designs, which started to prove very difficult. I suggested creating Momentus' first design
            system, and my boss gave me the go-ahead, leading to the creation of Campfire."
            technologies={['Angular', 'Karma', 'Storybook']}
            dates="July 2021 - Present"
            type="work"
            src={CampfireImage}
            alt="Campfire Design system documentation homepage"
            extraContent={<Campfire />}
            externalLink="https://ui.wldgrb.com"
          />

          <Figure
            title="Enfront"
            description="I founded Enfront as an e-commerce platform to enable entrepreneurs to sell their digital
            products without being charged excessive fees. While there are other similar platforms, they often fail
            to serve the needs of newly-established businesses. Working as the sole developer at Enfront has
            provided me with an invaluable education in frontend and backend development, devops, and customer
            relations."
            technologies={['Next.js', 'Mantine', 'Django', 'Django Rest Framework', 'Postgres', 'Docker', 'Liquid']}
            dates="August 2022 - February 2023"
            type="personal"
            src={EnfrontImage}
            alt="Enfront dashboard screenshot"
            extraContent={<Enfront />}
            githubLink="https://github.com/Enfront"
            externalLink="https://enfront.io"
          />

          <Figure
            title="Venuelytics"
            description="In December 2022, I joined the owner's son's team as a developer and designer for the annual Ungerboeck hackathon.
            Our team created Venuelytics, an analytics application for venues to compare their statistics against others in the surrounding
            area or worldwide. This was a fantastic opportunity for me to showcase my versatility and test out new technologies and designs.
            I am thrilled to say we took first place, and it is definitely one of my most significant achievements during my time at Momentus."
            technologies={['Angular', 'Supabase', 'Mapbox', 'Tailwind', 'Chart.js']}
            dates="December 2022 - January 2023"
            type="work"
            src={VenuelyticsImage}
            alt="Venuelytics dashboard screenshot"
            extraContent={<Venuelytics />}
          />

          <Figure
            title="The Forge Media"
            description="The Forge Media was a freelance project I did back in June 2021. The CEO and Founder had a vision
            for a media company in the St. Louis area that was innovative and forward thinking. Having a
            quick, modern, and responsive website was an important step in becoming the best St. Louis has to
            offer."
            technologies={['HTML', 'CSS', 'JS']}
            dates="June 2021 - August 2021"
            type="work"
            src={ForgeImage}
            alt="Screenshot of The Forge landing page"
            extraContent={<Forge />}
            githubLink="https://github.com/AustinWildgrube/forge"
            externalLink="https://theforge-media.com"
            figmaLink="https://www.figma.com/file/sqssQH5kZfAEgXlRgpQyqw/Larson?node-id=0%3A1&t=4c02hVeTeKuW4YzU-1"
          />
        </Accordion>
      </section>

      <section className="py-6 lg:py-20 lg:px-24">
        <h2 className="mb-8 text-3xl font-bold lg:text-5xl">Other Work</h2>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
          <SmallFigure
            title="Raverbot"
            description="Raver the Discord role saver keeps a server pain-free by storing user roles in a database so you'll never have to spend time
            reassigning them!"
            link="https://github.com/AustinWildgrube/raverbot"
            src={RaverBotImage}
            alt="Discord logo"
          />

          <SmallFigure
            title="FS Personal Language"
            description="During my senior year of college, I was assigned to create a programming language using C++ as one of my final projects."
            link="https://github.com/AustinWildgrube/4280_P4"
            src={FSCodeImage}
            alt="Code from my personal language"
          />
        </div>
      </section>
    </>
  );
}
