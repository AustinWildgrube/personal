import { Zoom } from '&/components/zoom';
import CampfireShowcase from '&/public/screenshots/campfire/campfire-showcase.jpg';

export default function Campfire(): JSX.Element {
  return (
    <div className="flex flex-col gap-x-16 lg:flex-row lg:justify-between">
      <div className="mb-8 max-w-xl lg:mb-0">
        <h2 className="mb-3 text-xl font-semibold">More About Campfire</h2>

        <p className="mb-6">
          At{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus
          </a>
          , we wanted our apps to have a unique look and feel that would set us apart from other technology companies.
          However, when the engineering team decided to use Angular Material components, it caused conflicts with our
          design team. Customizing Material components to fit our designs required a lot of overhead, which led to
          frustration among both designers and developers.
        </p>

        <p className="mb-6">
          As an intern, I experienced this frustration firsthand and began to look for alternative solutions. I
          discovered a library called Mantine while working on my own side project, and I was impressed by its ease of
          use and polished appearance. Despite being designed for React, I had an idea to create a similar library that
          would fit{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus&apos;
          </a>{' '}
          needs and the designers vision.
        </p>

        <p className="mb-6">
          I pitched the idea to my boss, and he immediately gave me the green light to pursue it. I developed a demo
          that included a button component and a table component, which I shared with the designers and the engineering
          team lead. Everyone loved it, and I continued working on the library, which we named Campfire. I collaborated
          with the designers to come up with a system that would work best for{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus
          </a>
          , and the library now has over 30 components that are used in all of our public-facing applications, serving
          thousands of venues globally.
        </p>

        <p className="mb-6">
          As the sole developer on the project, I had the freedom to work on it as I saw fit. Campfire is an Angular
          library that is installed via NPM and is tree-shakeable to keep the bundle size low. We made sure to
          prioritize unit testing using Karma to minimize the introduction of bugs, and we used Storybook.js and written
          MDX documentation to ensure that the documentation was clear and concise.
        </p>

        <p className="mb-6">
          Overall, working on Campfire has been a valuable learning experience that has changed my course of direction
          at{' '}
          <a className="text-blue-800" href="https://gomomentus.com/" target="_blank">
            Momentus
          </a>
          . My goal is to eventually open source Campfire so that others can benefit from it as well. I believe it is a
          well-designed enterprise-style library that could be useful to many developers.
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <figure className="cursor-zoom-in">
          <Zoom src={CampfireShowcase} placeholder="blur" alt="Campfire presentation image" />
          <figcaption className="mt-2 text-center">Campfire Presentation Image</figcaption>
        </figure>
      </div>
    </div>
  );
}
