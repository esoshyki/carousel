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



