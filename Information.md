## Link vs a (anchor)
a is a common way to route from one page to the next but is not best for navbar usage because it make sthe server redownload the various
fonts/extra js code each time we go from one page to the next, Links are better to use because they do not do that which makes performance better


## Extensions I downloaded
Tailwind CSS IntelliSense
ES7 React/Redux/GraphQL/React-Native snippets
* rafce auto created the main layout for a react page
JavaScript and TypeScript Nightly


## Client vs Server Side componets
every componet in our src/app/componet file will be server side automatically, this means it takes less memory, but we arent allowed to have interacatability. 
To make a componet client side, we have to add 'use client'; to the file.


## Getting Data 
UseState or UseEffect is client side and takes large amounts of memory so we try to use stuff like fetch in our serevr side componets 
const res = await fetch('url'); (note our page function must have async in it)
we are saying this is an asynchronus function, where our variable res is a const promise variable (we dont have data in it just yet ut there will be and we need it before we render the webpage)


## Data Sources and Caching
Data sourcing is fastest from Memory -> file system -> network so when we try to get data from the network we should cache it

we can do this by adding const res = await fetch('url', {next : {revalidate: 10} }); to update the data every 10 seconds 
or use {cache : 'no-store'} if you dont want to cache and show the most up to data data 

## Dynamic vs Static Rendering 
Static, page/componet is cached so the data isnt downloaded every time, dyanmic is everytime the page is opened it redownloads the data and renders it for the user by using cache we can tell next.js what pages will be static vs dyanmic when run, to test this you will have to use npm build and npm start as dev makes everything static

## Tailwind  https://tailwindcss.com/docs/installation/using-vite
+ Padding 
    - p-[number] (general padding)
    - px-[number] (horizontal padding)
    - py-[number] (vertical padding)
    - pt-[number] (top padding)
    - pl-[number] (left padding)
    - pb-[number] (bottom padding)
    - pr-[number] (right padding)
+ Margins same exact format but with a m instead of p
+ Text
    - Size
        * text-xs
        * text-sm
        * text-base
        * text-lg
        * text-2xl
    - Color
        * text-[color] (google tailwind color pallet to find colors) (text color)
        * bg-[color] (background color)
    - Thickness
        * font-thin
        * font-bold
        * font-light
        * font-medium