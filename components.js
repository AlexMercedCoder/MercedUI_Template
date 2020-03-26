/////////////
//test-component: use this as a model for creating your own
//Copy and paste this component and use it as a guide
/////////////
///DOCUMENTATION => https://github.com/AlexMercedCoder/MercedUI

// The Builder function building adn returning the components template, like a react render function
const testBuilder = (state, props) => {
    const style = `<style>
                 h1 {color: blue;}
                 h2 {color: red;}
                 </style>`;

    const template = `<h1> ${state.hello} </h1>
                    <h2> ${props.user} </h2>`;

    return `${style} ${template}`;
};

// The initial state of your component
const testState = { hello: 'Hello' };

// Optional Reducer Functions
const testReducer = (oldState, payload) => {
    if (payload.action === 'goodbye') {
        return { hello: 'goodbye' };
    }
    return oldState;
};

//assemble the component

class TestComponent extends MercedElement {
    constructor() {
        super(testBuilder, testState, testReducer);
    }
}

//Make an HTML tag, MUST BE A TWO PART NAME with a dash
MercedElement.makeTag('test-component', TestComponent);
