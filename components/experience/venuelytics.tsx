import { Zoom } from '&/components/zoom';
import VenuelyticsMap from '&/public/screenshots/venuelytics/venuelytics-map.png';

export default function Venuelytics(): JSX.Element {
  return (
    <div className="flex flex-col gap-x-16 lg:flex-row lg:justify-between">
      <div className="mb-8 max-w-xl lg:mb-0">
        <h2 className="mb-3 text-xl font-semibold">More About Venuelytics</h2>

        <p className="mb-6">
          Although I had worked at{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus
          </a>{' '}
          for over three years prior to the 2022 hack-a-thon, this was my inaugural competition. Confident in my
          abilities as a web developer and designer, I believed that I was ready to compete with the best of the best.
          Just as I was about to begin searching for a team,{' '}
          <a className="text-blue-800" href="https://www.linkedin.com/in/jungerboeck/" target="_blank">
            Justin Ungerboeck
          </a>{' '}
          contacted me, inquiring if I had already formed a team. My boss had recommended me when Justin was in need of
          a UI/UX developer.
        </p>

        <p className="mb-6">
          Justin had already conceived of an ingenious idea, one that he knew would be in high demand among venues and
          sell exceptionally well. This was the opportunity he had been waiting for, the moment to breathe life into his
          idea and prove to everyone that it was a viable product for{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus
          </a>{' '}
          to offer. I couldn&apos;t disappoint him. Fortunately, I was free to use any technology I desired, so I opted
          to stick with Angular,{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus&apos;
          </a>{' '}
          primary framework, and supplemented it with Supabase for a quick database.
        </p>

        <p>
          When the 24-hour time limit elapsed, Justin presented our product to Yammer via video, and much to my
          surprise, it was met with a resounding wave of enthusiasm from clients. They were clamoring to use it and were
          genuinely impressed by the concept that we had developed. After waiting for two agonizing days for the 30
          projects to be evaluated, we were ecstatic to learn that we had taken first place. I&apos;m thrilled that I
          selected the 2022 hack-a-thon as my inaugural competition. I had an incredible team, and together we brought
          Justin&apos;s idea to fruition, exactly as he had envisioned it.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <figure className="cursor-zoom-in">
          <Zoom src={VenuelyticsMap} placeholder="blur" alt="Lower half of Venulytics dashboard" />
          <figcaption className="mt-2 text-center">Lower Half of The Dashboard</figcaption>
        </figure>
      </div>
    </div>
  );
}
