In other words, use Prettier for formatting and linters for catching bugs!

Yes: NODE_ENV=development → installs both dependencies and devDependencies
No: NODE_ENV=production → installs only dependencies


npx prettier . --check


--check is like --write, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.


npx prettier . --write

IMP

prettier --write . is great for formatting everything, but for a big project it might take a little while. You may run prettier --write app/ to format a certain directory, or prettier --write app/components/Button.js to format a certain file. Or use a glob like prettier --write "app/**/*.test.js" to format all tests in a directory 



What happens with git push -u origin main
git push -u origin main


-u is shorthand for --set-upstream

This does two things at once:

Pushes your local main branch to origin

Sets the upstream branch so Git knows your local main tracks origin/main



UsePathName

You CANNOT read current URL inside a Server Component.

So usePathname() must be used inside a Client Component.

usePathname() automatically react karta hai jab route change hota hai.


So what is barrel file ??
A barrel file is an index.ts (or index.js) file that re-exports multiple modules/files from a folder, so you can import everything from a single entry point.


for figma make ui chnages you can see here which is 

import { AboutHero } from './components/AboutHero';
import { MissionSection } from './components/MissionSection';
import { WhoWeAre } from './components/WhoWeAre';
import { OurApproach } from './components/OurApproach';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisionSection } from './components/VisionSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <MissionSection />
      <WhoWeAre />
      <OurApproach />
      <WhyChooseUs />
      <VisionSection />
    </div>
  );
}



Dynamic Route Segments

When you don't know the exact route segment names ahead of time and want to create routes from dynamic data

A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.



