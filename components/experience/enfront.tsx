import { Zoom } from '&/components/zoom';
import EnfrontArchitecture from '&/public/screenshots/enfront/enfront-architecture.png';
import EnfrontGradient from '&/public/screenshots/enfront/enfront-gradient.png';
import EnfrontTheme from '&/public/screenshots/enfront/enfront-theme.png';

export default function Enfront(): JSX.Element {
  return (
    <div className="flex flex-col gap-x-16 lg:flex-row lg:justify-between">
      <div className="mb-8 max-w-xl lg:mb-0">
        <h2 className="mb-3 text-xl font-semibold">More About Enfront</h2>

        <p className="mb-6">
          <a className="text-blue-800" href="https://enfront.io/" target="_blank">
            Enfront
          </a>{' '}
          is the largest project I&apos;ve ever worked on. It all started when a friend wanted to sell his digital goods
          but found that popular websites like Gumroad and Etsy charged high fees and didn&apos;t cater to small
          businesses. So I built a prototype one night and fell in love with the idea of creating a full-scale
          e-commerce platform.
        </p>

        <p className="mb-6">
          My buddy and I brainstormed what we wanted from{' '}
          <a className="text-blue-800" href="https://enfront.io/" target="_blank">
            Enfront
          </a>
          : a large-scale e-commerce platform that focused on small businesses. We wanted users to be able to sell any
          type of digital content—videos, software, and licenses—and have a shop that fit their unique style and brand.
          We also aimed to support multiple payment gateways so users worldwide could pay and get paid without barriers.
        </p>

        <p className="mb-6">
          From there, I got to work on development. As an Angular developer, I decided to try out React and Next.js on
          the frontend and Django on the backend. Enfront has many complex parts, including account creation with 2FA,
          an intuitive order flow, inventory management with support for multiple currencies, payment gateway
          integrations with webhooks, a custom CMS for creating unique shops, giving merchants their own subdomain of
          Enfront to host their shop, and a CI/CD pipeline to keep Enfront updated and running.
        </p>

        <p className="mb-6">
          To bring all these pieces together, I had to become proficient in DevOps. I learned Docker and connected my
          backend Django project to the React frontend project with a database. Docker was incredibly easy to use, and I
          was able to spin up a Digital Ocean droplet with no problem.
        </p>

        <p>
          Since{' '}
          <a className="text-blue-800" href="https://enfront.io/" target="_blank">
            Enfront&apos;s
          </a>{' '}
          beta release, it&apos;s had over 50,000 unique visitors and processed over $100,000 in payments. Building{' '}
          <a className="text-blue-800" href="https://enfront.io/" target="_blank">
            Enfront
          </a>{' '}
          has been an incredible learning experience, and I&apos;m grateful for the opportunity to have worked on it.
          I&apos;ve become a better developer by learning new tooling and expanding my horizons to new technologies.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <figure className="cursor-zoom-in">
          <Zoom src={EnfrontGradient} placeholder="blur" alt="The Enfront logo on a gradient background" />
          <figcaption className="mt-2 text-center">Enfront Logo</figcaption>
        </figure>

        <figure className="cursor-zoom-in">
          <Zoom src={EnfrontArchitecture} placeholder="blur" alt="An Excalidraw image of Enfront's architecture" />
          <figcaption className="mt-2 text-center">Enfront&apos;s Fullstack Architecture</figcaption>
        </figure>

        <figure className="cursor-zoom-in">
          <Zoom src={EnfrontTheme} placeholder="blur" alt="The Enfront default shop theme" />
          <figcaption className="mt-2 text-center">Enfront&apos;s Default Shop Theme</figcaption>
        </figure>
      </div>
    </div>
  );
}
