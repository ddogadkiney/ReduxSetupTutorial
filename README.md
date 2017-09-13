# Initial React Redux Setup

![1](/public/img/1.png?raw=true)
Create your react app however you like. I use create react app here.

![2](/public/img/2.png?raw=true)
Open app.js. I made a few changes to the boilerplate.

![3](/public/img/3.png?raw=true)
Add a components folder and make a primary component.

![4](/public/img/4.png?raw=true)
Install Chrome Redux DevTools.

![5](/public/img/5.png?raw=true)
Create a store with middleware then add the store to the app with the redux provider (the app will break).

![6](/public/img/6.png?raw=true)
Stores only take one reducer so make a root reducer to combine all of your reducer.

![7](/public/img/7.png?raw=true)
Create your first reducer.

![8](/public/img/8.png?raw=true)
Add that reducer to your root reducer.

![9](/public/img/9.png?raw=true)
The app should work again.

![10](/public/img/10.png?raw=true)
Double check by looking at DevTools. It should show state.

![11](/public/img/11.png?raw=true)
Having state isn't helpful if you cant access it in your components. Create a container to "glue" that state to a component.

![12](/public/img/12.png?raw=true)
Sample container structure.

![13](/public/img/13.png?raw=true)
Pass state as a prop to a visual component (this will break app).

![14](/public/img/14.png?raw=true)
Get frustrated rename a bunch of files and add bootstrap to app.

![15](/public/img/16.png?raw=true)
Create a stateless component to display passed props.

![17](/public/img/17.png?raw=true)
The app should work again.

![18](/public/img/18.png?raw=true)
I updated the reducer so it has more state for a better demo.

![19](/public/img/19.png?raw=true)
A cool thing about redux is passing state between sister components. Lets do that.

![20](/public/img/20.png?raw=true)
To do this we need to create actions. Action types are not needed but using this format has many advantages. For more information on why to use action types [redux.js.org](http://redux.js.org/docs/recipes/ReducingBoilerplate.html).


![21](/public/img/21.png?raw=true)
Create a show spoiler action and its corresponding action type.

![22](/public/img/22.png?raw=true)
Add a reducer to "catch" the action and create new state.

![23](/public/img/23.png?raw=true)
Add that reducer to the root reducer.

![24](/public/img/24.png?raw=true)
See that state has been updated in DevTools.

![25](/public/img/25.png?raw=true)
Add the action you created to the reducers switch and tell it what to do when it receives the action. In this case add the characters information to state.

![26](/public/img/26.png?raw=true)
Our list view container unchanged. It will need to be updated so can call the action we created.

![27](/public/img/27.png?raw=true)
Add the action/dispatch to the container and pass it to the visual component.

![28](/public/img/28.png?raw=true)
Our list view...

![29](/public/img/29.png?raw=true)
... and now our list view with a button with a button that calls the action we passed it.

![30](/public/img/30.png?raw=true)
The app should be working again.

![31](/public/img/31.png?raw=true)
Clicking the button we made sends an action (mine has typos)...

![32](/public/img/32.png?raw=true)
...that updates state

![33](/public/img/33.png?raw=true)
Time to run through displaying state one more time. First, add a container to your main page.

![34](/public/img/34.png?raw=true)
Create the continer you just called in your main page.

![35](/public/img/35.png?raw=true)
Make your visual container and you should have successfully created an app that has Reducers, Actions and Containers!
