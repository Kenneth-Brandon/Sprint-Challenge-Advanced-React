- [ ] Why would you use class component over function components (removing hooks from the question)?

I think using class component would give us more options to keep track and update the component during its lifecycle. We would have the ability to control the component on every little step the component makes during its lifecycle.

- [ ] Name three lifecycle methods and their purposes.

1- componentDidMount() this method is used after the initial render only of a component we can write could here to do async things, like getting data from the api, setting the state...

2- componentDidUpdate() this method is called when the component updates after the first render

it takes to arguments, the previous Props and the previous State. Here, we can write code that does something base on the Props and State update.

3- shouldComponentUpdate() this method is used to control the render of a component.

It takes two arguments, nextProps and nextState, we than can write our logic telling the render function if it should render or not, based on what we return either true or false.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is, to have the ability create complex hooks that use existing hooks so we can reuse them later on. We extend the stateful login by combining several hooks into a single powerful one.

- [ ] Why is it important to test our apps?

It is very important to test our apps because, we want to make sure and have confidence that when making a change in out App if it passes the tests it will work correctly. Also, we want to make sure that anyone that tries to modify and work on our code, will be able to tell if there's something wrong when changing something.
