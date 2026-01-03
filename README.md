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

