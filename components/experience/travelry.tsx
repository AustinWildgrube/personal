export default function Travelry(): JSX.Element {
  return (
    <div className="flex flex-col gap-x-16 lg:flex-row lg:justify-between">
      <div className="mb-8 max-w-xl lg:mb-0">
        <h2 className="mb-3 text-xl font-semibold">More About Travelry</h2>

        <p className="mb-6">
          Travelry is a social media app designed for travelers who love creating memories on their adventures. My wife
          and I are passionate about traveling, and we&apos;ve always wanted a better way to document our journeys
          together. That&apos;s why we decided to create Travelry, the first-ever mobile app I&apos;ve developed.
        </p>

        <p className="mb-6">
          As a developer familiar with React, I decided to use React Native to bring our dream app to life. Even though
          it&apos;s still in the early stages of development, I&apos;m confident that I can make it a reality. The name
          Travelry is a combination of travel and diary because it&apos;s primarily a travel diary with a social aspect
          to it.
        </p>

        <p>
          We&apos;re currently working hard to have Travelry ready for release by the end of the year. Our goal is to
          make it available on both the Apple App Store and the Google Play App Store, making it accessible to users
          worldwide.
        </p>
      </div>
    </div>
  );
}
