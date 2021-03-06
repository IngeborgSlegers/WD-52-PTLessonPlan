// DUE:
//  * REACT MODULES

// REACT CHALLENGE
// PROJECT PLANNING (BRING 3 IDEAS)

// ASSIGN:
//  * BLUE BADGE PROJECT
//  * PROJECT PLANNING DOCUMENT

/***************************************************************
DAY 2 REACT CHALLENGE - FETCH(), .MAP(), and STYLED COMPONENTS
***************************************************************/

/* 
    REACT CHALLENGE DAY TWO
    TOPICS HIT:: FETCH() MAP() AND STYLE PROPS

    Bronze--
    
    The the DayTwo component the ability to use a .fetch() to reach out to the studio ghibli api and return information about people.  Store that information in a 'people' state value, and print it to the console. This should all take place in a call to useEffect OR a callback passed to useEffect().

    Add an <h2></h2> and use a style prop to style the <h2></h2>.

    Note that styling and grabbing api data function independently!

    use this url for accessing the ghibli api:
    

    Silver-- 
    Create a functional component called Display
    Use .map() to call your Display component multiple times, 
    with each Display responsible for showing the name from a peron to the webpage.
    Use a styling prop to style Display's appearance

    Gold--
    Have your Display Functional Component passed a second prop, this time for the person's gender.
    Add a button inside the functional component that will toggle between name and gender
    to be displayed.  
 */

 // ***************************************************************************

// SOLUTION

 /*
 * BRONZE *
 IN DAYTWO COMPONENT
  const [ people, setPeople ] = useState([]);

  let fetchPeople = () => {
      fetch('https://ghibliapi.herokuapp.com/people/')
          .then(res => res.json())
          .then((data) => {
              console.log(data);
              setPeople(data);
          })
  }

  useEffect(() => {
      fetchPeople() }
      , []
  );

  *******************

  npm install styled-components;

  import styled from 'styled-components';

  const Header = styled.h2`
      background-color: navy;
      color: white;
      height: 3em;
      padding: 0.7em;
      text-align: center;
  `;

  <Header>People</Header>


  * SILVER *

    CREATE DISPLAY COMPONENT
    import React from 'react';

    const Display = (props) => {

      return(
        <div>
          <h2>{props.displayPerson.name}</h2>
        </div>
      );
    };

    export default Display;

    IN DAYTWO COMPONENT
  { 
    people.map(person => {
      // console.log(person)
      return <Display key={person.id} displayPerson={person} />
    })

  }
*/