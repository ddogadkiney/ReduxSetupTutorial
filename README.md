# Initial React Redux Setup

![1](/public/img/1.png?raw=true)
1. Create your react app however you like. I use create react app here.
<br/> <br/> <br/>
![2](/public/img/2.png?raw=true)
2. Open app.js. I made a few changes to the boilerplate.
<br/> <br/> <br/>
![3](/public/img/3.png?raw=true)
3. a components folder and make a primary component.
<br/> <br/> <br/>
![4](/public/img/4.png?raw=true)
4. Install the four redux packages.
<br/> <br/> <br/>
![5](/public/img/5.png?raw=true)
5. Install chrome DevTools
<br/> <br/> <br/>
![6](/public/img/6.png?raw=true)
6. Create a store with middleware then add the store to the app with the redux provider (the app will break).
<br/> <br/> <br/>
![7](/public/img/7.png?raw=true)
7. Stores only take one reducer so make a root reducer to combine all of your reducers.
<br/> <br/> <br/>
![8](/public/img/8.png?raw=true)
8. Create your first reducer.
<br/> <br/> <br/>
![9](/public/img/9.png?raw=true)
9. Add that reducer to your root reducer.
<br/> <br/> <br/>
![10](/public/img/10.png?raw=true)
10. The app should work again.
<br/> <br/> <br/>
![11](/public/img/11.png?raw=true)
11. Double check by looking at DevTools. It should show state.
<br/> <br/> <br/>
![12](/public/img/12.png?raw=true)
12. Having state isn't helpful if you cant access it in your components. Create a container to "glue" that state to a component.
<br/> <br/> <br/>
![13](/public/img/13.png?raw=true)
13. Sample container structure.
<br/> <br/> <br/>
![14](/public/img/14.png?raw=true)
14. Pass state as a prop to a visual component (this will break app).
<br/> <br/> <br/>
![15](/public/img/15.png?raw=true)
15. Get frustrated rename a bunch of files and add bootstrap to app.
<br/> <br/> <br/>
![16](/public/img/16.png?raw=true)
16. Create a stateless component to display passed props.
<br/> <br/> <br/>
![17](/public/img/17.png?raw=true)
17. The app should work again.
<br/> <br/> <br/>
![18](/public/img/18.png?raw=true)
18. I updated the reducer so it has more state for a better demo.
<br/> <br/> <br/>
![19](/public/img/19.png?raw=true)
19. A cool thing about redux is passing state between sister components. Lets do that.
<br/> <br/> <br/>
![20](/public/img/20.png?raw=true)
20. To do this we need to create actions. Action types are not needed but using this format has many advantages. For more information on why to use action types [ redux.js.org](http://redux.js.org/docs/recipes/ReducingBoilerplate.html).
<br/> <br/> <br/>
![21](/public/img/21.png?raw=true)
21. Create a show spoiler action and its corresponding action type.
<br/> <br/> <br/>
![22](/public/img/22.png?raw=true)
22. Add a reducer to "catch" the action and create new state.
<br/> <br/> <br/>
![23](/public/img/23.png?raw=true)
23. Add that reducer to the root reducer.
<br/> <br/> <br/>
![24](/public/img/24.png?raw=true)
24. See that state has been updated in DevTools.
<br/> <br/> <br/>
![25](/public/img/25.png?raw=true)
25. Add the action you created to the reducers switch and tell it what to do when it receives the action. In this case add the characters information to state.
<br/> <br/> <br/>
![26](/public/img/26.png?raw=true)
26. Our list view container unchanged. It will need to be updated so can call the action we created.
<br/> <br/> <br/>
![27](/public/img/27.png?raw=true)
27. Add the action/dispatch to the container and pass it to the visual component.
<br/> <br/> <br/>
![28](/public/img/28.png?raw=true)
28. Our list view...
<br/> <br/> <br/>
![29](/public/img/29.png?raw=true)
29. ... and now our list view with a button with a button that calls the action we passed it.
<br/> <br/> <br/>
![30](/public/img/30.png?raw=true)
30. The app should be working again.
<br/> <br/> <br/>
![31](/public/img/31.png?raw=true)
31. Clicking the button we made sends an action (mine has typos)...
<br/> <br/> <br/>
![32](/public/img/32.png?raw=true)
32. ...that updates state
<br/> <br/> <br/>
![33](/public/img/33.png?raw=true)
33. Time to run through displaying state one more time. First, add a container to your main page.
<br/> <br/> <br/>
![34](/public/img/34.png?raw=true)
34. Create the continer you just called in your main page.
<br/> <br/> <br/>
![35](/public/img/35.png?raw=true)
35. Make your visual container and you should have successfully created an app that has Reducers, Actions and Containers!
<br/> <br/> <br/>
