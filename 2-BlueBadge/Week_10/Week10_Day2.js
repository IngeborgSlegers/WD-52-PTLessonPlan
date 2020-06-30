// REACT CHALLENGE
// ASSIGN WORKOUT LOG MODULES

/**********************************************************
DAY ONE REACT CHALLENGE - USESTATE(), PROPS, DATABINDING
**********************************************************/

// https://github.com/AlecxMoritz/react-challenges-starter
// Have student clone this project. It's just a client so there is no back end to match it.


/*
BRONZE LEVEL:
Inside the DayOne component, initialize three state values ( using useState() ), platform, generation, and maker, as well as the methods to update them. Give them a default value of 'Playstation', 3, and 'Sony' respectively. 

Add a button to the return of this component. When this button is clicked, it should fire off a function to print all three values to the console.


SILVER LEVEL:
Add onto the Bronze Level challenge.

Do all of the above, but make a new functional component called
'PropDisplay' (careful with folder structure!).  Call this component
three times inside the 'DayOne' return.  Each 'PropDisplay'
component call should be passed a prop, the first is passed 'console',
the second 'version', and the third 'maker'.  Each PropDisplay should 
display the prop it gets passed.  Good luck!

GOLD LEVEL:
Reset the initial values of the calls to useState() with empty strings, so platform, generation, and maker are all empty when the component is created.

Add three inputs, use data binding to allow the values of platform, generation, and maker to change when a user types into those inputs.

// ***************************************************************************

// SOLUTION

* BRONZE

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}


* SILVER

const PropDisplay = (props) => {
    return (
        <h4>{ props.string }</h4>
    )
}

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}

* GOLD

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <hr />
            <Label>Platform</Label>
            <Input value={ platform } onChange={(e) => setPlatform(e.target.value)} />
            <Label>Generation</Label>
            <Input value={ generation } onChange={(e) => setGeneration(e.target.value)} />
            <Label>Maker</Label>
            <Input value={ maker } onChange={(e) => setMaker(e.target.value)} />
        </Container>
    )
}

*/
