Name of your project: DevStack  

A little description : DevStack is a simple and interractive web application where users can explore different Technologics 
and  add their favourite technologies to a personal stack . It provide a clean and responsive interface for managing selected
selected technologies .


Technology that I use: React, TypeScript, Tailwind Css, DaisyUL , React Toastify , Vite

3 features about my project: 1) Explore Technologies
                             2) Add Technologies to stack
                             3) Remove Technologies


React questions & Answer :

1)What is JSX, and why is it used in React?
Ans: JSX lets us write HTML like code inside JavaScript . It make React UI easier to write.

2)What is the difference between props and state?
Ans: Props are data passed from parent to child . State is data managed inside a component.

3)What does the useState hook do, and where did you use it in this project?
Ans: useState  managed changing data. I used it to manage the seleted technologies in the stack.

4)What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect is used to run side effects after rendering. I did not use it in my project . I 
used an async function to load the JSON data.

5)Why does every item in a .map() list need a unique key prop?
Ans: A unique key heips react identify each list item and update it correctly. 

6)What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: conditionak rendering means showing UI based on a condition. I used it to show a message when the stack is empty 

7)How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: The parent sends data throught props. the child sends data back by calling a function passed through props.
