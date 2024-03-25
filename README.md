This is a full stack project built with Next.js and MongoDB.

## Getting Started

Open [https://plant-based-mk2.vercel.app/](https://plant-based-mk2.vercel.app/) with your browser to see the result.

## What is this Project?

Initially, I was at a loss for what I wanted to design. But after a little bit of thought, I settled on the idea of creating a site that can be used as a template for other future full stack projects. Thus, this project was born. It features full JWT authentication, a database for user and blog creation and storage, a full functional cms system for admins, and a live blog creator/preview section. Also I know I know, the styling could use a bit of work, but being a template I wanted to make sure it looked presentable without sinking too much time into the styling so I could move onto some other features that I want to learn for the future. 

## Technologies

This project utilizes:
- Next.Js
- MongoDB
- TailwindCSS
- Jose-JWT (jwt authentication)
- React Spring

## The Journey & Skills Learned
Okay so, this is my first real solo full stack project since making it out of [The Odin Project](https://www.theodinproject.com/) bootcamp. I started out with defining the goals and work flow that I was aiming for with this project. Then I made my early designs and sculpted them as I felt out more of the design that I was beginning to envision. I really enjoy designing mobile first so, that was my approach here. Again, you may notice there are minimal designs (ex: tablet, desktop), but being a template, I was really focused on learning the functionality of the site over anything else. 

![Screenshot (11)](https://github.com/juniortorr/practice-app/assets/86130350/91ce9c34-55ca-45c4-b98e-2895b7bbd92b)

Once that was done I moved onto developing the backend. This is also my first project that I've ever used Next.js with. I really fell in love with the Next.js environment and workflow just from seeing some videos around the dev community and decided that I might as well try to add it onto my skill list. As a new user, I was deeply impressed with how easy Next.Js was to adapt to and learn. I gave myself a week for the backend and a week for the frontend just to see where it would get me. 
The biggest challenges I ran into all came on the back end naturally. I truly enjoyed trying to rack my brain on setting up authentication but man, it was a lot to learn at once. First I tried NextAuth and got myself into an absolute MESS by trying out the beta, getting lost in the migration docs, and by not fully grasping how mongo and Mongoose works with the middleware in Next.Js. But nevertheless, after a few days of research and going back through some of the curriculum at The Odin Project, I decided to implement a JWT style authentication for users. Other than that, I really feel like the rest was just learning Next.js and diving deeper into react with things like server components.

Once the back end was complete, the rest really clicked rather easily. I really enjoyed splitting up the work from backend to frontend end simply because when I got to the frontend half of the project everything just felt like smooth sailing. The only real issues that I ran into were in finding a way to animate during state changes. But, react-spring came to the rescue, and it was nice to mess around with that library. All in all, this project was a huge learning experience and I'm excited to become even more well-versed on the next project. 

## What I Would Do Differently?

I would definitely try to take advantage of state for the user information and being signed in. If it's not here while you're reading this, I do plan to implement a sort blogs feature that'll take advantage of using state for the loaded blogs. And I also want to revisit nextAuth to see where I went wrong. But, as always, we learn.

