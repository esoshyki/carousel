## CAROUSEL
  **I will describe steps of making component to make it easeir for reviewer**

### SETUP ENVIRONMENT

To start, let's create out project and run

`` yarn init ``

and accept default values.

Next, we'll try to set up dev devependies. Let's start with webpack. For this, let's install it:

``yarn add webpack webpack-cli webpack-dev-server -D``

For our project, we also need loaders :

``yarn add style-loader css-loader sass sass-loader html-webpack-plugin -D``

and, finally, let's install babel

``yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D``

OK. Now let's deal with dependencies. 

``yarn add react react-dom``.

Good. Now we'll set up webpack in **webpack.config.js**.
Is wasn't very hard. Just follow the instructions of the official documentation.

Then. connect babel in **.babelcrc**. Made the same thing like we did with webpack. 
Follow official documentation.

Next. Create folder **./src** and there make **index.js**, **index.html**, **style.sass**.
Create basic **!!** markup in **index.html**, and add before closing tag **</body>** 

``<script src="./index.js"></script>``

All done. 
Now we can write our carousel.

Carousel was made as React component, which takes next props:
 * directly **slides**. It's array of objects with slide data. It can be either **property set** for building slides by pattern (it's not very bad idea, because we can get our slides from backend like json files, and easily transform them to react-components), either we can create absolutely any components and keep them in array, in order for them to be later transferred in Slide function, as **Content** property. 
 * **slidesCount**. The count of slides, which will be shown in carousel chunk at a time.

So. In desktop version I created arrow buttons to change carousel slide. 
In mobile version changing change is foreseen by swiping.

I am facing a pretty big problem when did the infinite scroll functionality. Without it, task would be much more easier.

Ultimately, I decided to generate three ``<div>`` elements for each change in the current frame. Previous, current and next chunk.
As for me, it works not bad.

Sorry, I have not been able to do the implementation of the transition to the current chunk well enough due to the lack of time, since I work and I have children, and there is not much free time. I don’t want to keep you waiting long enough, but I am sure I can do everything perfectly. If you look and want me to do better please let me know.



[deploy](https://esoshyki.github.io/carousel/)

[video](https://youtu.be/-tlHygDaDII)







