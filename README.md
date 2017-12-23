# Fighter!

This repo is a small project I built while learning React/Redux. Rather than doing a todo app, I settled on the idea of mashing up Street Fighter & Pokemon, using the [Prisoner's Dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma) to power the logic.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Download/clone this project, and start it with `yarn start` or `npm start`.

## Workflow

 - User selects skills (attack/defense/health) for their character.
 - Once all skill points have been allocated to skills, an oponent is generated, and a fight begins.
 - User can select to 'Attack' or 'Reflect' their opponent. the opponent does the same, and an outcome is displayed.
 - When one fighter's health reaches 0, a message displaying the winner appears.

## Dev Process
 
- **Learn React basics:** Use React to build a UI that generates random characters for the user to choose from. Once a character has been selected, select a second character for the user's character to fight.
- **Learn Redux basics:** Implement a Redux store to manage state for the React app.
- **Business logic change:** Allow a user to pick their characters stats, then present them with a randomly generated opponent.
- **Game feature:** UI components to display both fighters, buttons for user actions (attack & reflect), and to display the results from all turns taken. Also build actions/reducers/logic to power this.
- **Refactor:** use JS classes to isolate Fighter & Turn logic to simplify code.
- **Decrease fighter health based on turn outcomes:** Decrease fighter health based on turn outcomes
- **Learn redux-thunk:** Creating a turn doesn't actually update a fighter's remaining health. So we'll need to fire off two redux actions from a single user action. the **redux-thunk** library allows us to do this.

## Learning Materials

React:
- [ReactJS Docs](https://reactjs.org/docs/installation.html)


Redux:

- [Redux Docs](http://redux.js.org/docs/basics/)
- [Egghead.io -- Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
- [Blog -- Great explanation of how Redux works](http://www.youhavetolearncomputers.com/blog/2015/9/15/a-conceptual-overview-of-redux-or-how-i-fell-in-love-with-a-javascript-state-container)
- [Blog -- Ajax requests in React](https://daveceddia.com/ajax-requests-in-react/)
- [A Better File Structure For React/Redux Applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)


Thunk:

- [Github (redux-thunk) -- Thunk middleware for Redux](https://github.com/gaearon/redux-thunk)
- [Medium -- A Dummy’s Guide to Redux and Thunk in React](https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3)
- [Redux FAQ: Organizing State](https://redux.js.org/docs/faq/OrganizingState.html)
- [StackOverflow -- Accessing Redux state in an action creator?](https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator)


JS:

- [Github Gist -- New ES6 Constructor Semantics and Usage Examples](https://gist.github.com/allenwb/53927e46b31564168a1d)

Composing Software Series on Medium
- [Part 1: The Rise and Fall and Rise of Functional Programming](https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c)
- [Part 2: Why Learn Functional Programming in JavaScript?](https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257#.i6vf0q8uy)
- [Part 3: A Functional Programmer’s Introduction to JavaScript](https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30#.zdpw16p65)
- [Part 4: Higher Order Functions](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99#.egoxjg6x7)
- [Part 5: Reduce](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)
- [Part 6: Functors & Categories](https://medium.com/javascript-scene/functors-categories-61e031bac53f#.4hqndcx22)
- [Part 7: Functional Mixins](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c)
- [Part 8: JavaScript Factory Functions with ES6+](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- [Part 9: Why Composition is Harder with Classes](https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa)
- [Part 10: Composable Datatypes with Functions](https://medium.com/javascript-scene/composable-datatypes-with-functions-aec72db3b093)
- [Part 11: JavaScript Monads Made Simple](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8)
