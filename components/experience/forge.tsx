import { Zoom } from '&/components/zoom';
import ForgeBranding from '&/public/screenshots/forge/forge-branding.png';
import ForgeWork from '&/public/screenshots/forge/forge-work.png';

export default function TheForge(): JSX.Element {
  return (
    <div className="flex flex-col gap-x-16 lg:flex-row lg:justify-between">
      <div className="mb-8 max-w-xl pl-4 lg:mb-0">
        <h2 className="mb-3 text-xl font-semibold">More About The Forge Media</h2>

        <p className="mb-6">
          In May 2021, my former boss at Momentus,{' '}
          <a className="text-blue-800" href="https://www.linkedin.com/in/mike-engelhardt-baa9426/" target="_blank">
            Mike Engelhardt
          </a>
          , reached out to me with an interesting opportunity. He informed me that a former coworker of his was starting
          a new media company in St. Louis and was looking for a skilled web developer to create their website. I was
          introduced to{' '}
          <a className="text-blue-800" href="https://www.linkedin.com/in/jack-larson-11817b30/" target="_blank">
            Jack Larson
          </a>
          , who I immediately hit it off with. We connected over our shared love of technology and design, and it was
          clear that we were both excited about the prospect of working together.
        </p>

        <p className="mb-6">
          Over a series of virtual and in-person meetings, I got to know Jack and his team and learned more about their
          mission and goals for The Forge. It was clear that they wanted to stand out from the other media companies in
          St. Louis by being innovative and forward-thinking. They wanted their website to reflect this ethos by being
          modern and eye-catching while also being functional and optimized for both desktop and mobile devices.
        </p>

        <p className="mb-6">
          As a web developer seeking experience building websites for new and upcoming businesses, I was excited to take
          on this project. Working collaboratively with Jack, we explored multiple design concepts until we found the
          perfect one that encapsulated their unique vision. After settling on the right design, I went on to create
          several variations to further refine the layout. The team was particularly drawn to one of the variations,
          which provided me with a clear direction for development.
        </p>

        <p className="mb-6">
          With the design in hand, I began developing the website. The Forge didn&apos;t need fancy technology, and I
          was happy to go back to the basics of web technology to build a website that was not only visually striking
          but also intuitive and easy to navigate. Throughout the process, I remained in close contact with Jack and the
          team, addressing any feedback or concerns and making necessary adjustments as needed.
        </p>

        <p className="">
          In the end, I was able to deliver a website that exceeded their expectations, providing The Forge with the
          online presence they needed to stand out in the competitive St. Louis media scene. I am incredibly proud of
          the results we achieved, and I look forward to working on similar projects in the future.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <figure className="cursor-zoom-in">
          <Zoom src={ForgeWork} placeholder="blur" alt="The work page on The Forge Media website" />
          <figcaption className="mt-2 text-center">The Forge Media Work Page</figcaption>
        </figure>

        <figure className="cursor-zoom-in">
          <Zoom src={ForgeBranding} placeholder="blur" alt="The Forge Media brand book" />
          <figcaption className="mt-2 text-center">The Forge Media Band Book</figcaption>
        </figure>
      </div>
    </div>
  );
}
