# React + Vite

In this app I used react-router-dom for displaying diferent country content on dinamic page.

Data I filtered using params with useparams hook. 

Questions:

How would you optimize the performance of the list rendering, in these 2 or 3 combined lists.

All my lists components received a props and saved it in variable, than using useEffect hook run a function and filter data and after that save it in a local state. UseEffect hooks has this variable in dependencies. All functions and if I pass to the props i wrapp in a callback hook. I save data into the variable and in the end of functionaliti pass to the state, because i don't want a dribble.


Can you explain the difference between state and props in React, and how would you use them for the search?

State - it a local storage of a data that can be initialized in the react jsx functin, it save the data and when it changes it rerender the component. 
Props - this is funtion or state, or other data, that passed from parent component to the children component. When parents state(function,data) that is passed to the child is changed, parent and children component will rerendering.
I try didn't use props because it can make a drilled of application, but if a pass props I did memo, or callback and never passed it to initial of children state.

How does TypeScript enhance the development experience in a React application?
TypeScript can help for developers to write a code without bugs, because it did applixation a strict and developer can make a type guard for params, or type guards for objects, can use enums and other literals for make application more protected.

How would you handle pagination or infinite scrolling for a large list of countries? Assume only 10 per page are allowed.
I can use a slice method when I fetch array and I saved index of last item in array and make limit for showing items per one fetch.

What are some advanced TypeScript features that could be useful in this project?
I think it will be good for this project used interfaces to protect what keys on object must be, we can use literals, enums, generics.

Can you explain how context API or Redux can be integrated into this project for state management?
For this project will be good to create Redux store, to meneged the state and from the store use it in diferrent components. We need to create store, wrapp with storeprovider our root component and than created a slices for make actions with our store state. 