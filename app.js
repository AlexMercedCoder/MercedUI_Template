//////////////////////////////
//HINTS
//Read up on the FormTool to make it easy to work with forms
//Read up on mapToString to make it easy to build templates from an array
//Read up on MUIRequest to make your API calls
///////////////////////////////

//storing the component instance in a variable
const theTest = document.getElementById('test');

//create a global store/state
const appState = globalStore({
    hello: 'Hello World, I am from the global store/state'
});

console.log(theTest);

//register our component with appState
appState.register(theTest);
