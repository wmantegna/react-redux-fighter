# Fighter!

This repo is a small project I built while learning React/Redux. Rather than doing a todo app, I settled on the idea of mashing up Street Fighter & Pokemon, using the [Prisoner's Dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma) to power the logic.

**This is the react_only branch, which is a much simpler implementation than what's described in this ReadMe**

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