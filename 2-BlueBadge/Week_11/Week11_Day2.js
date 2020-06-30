// REACT CHALLENGE

/**************************
DAY THREE REACT CHALLENGE
**************************/
/* 

    REACT CHALLENGE DAY TWO
    TOPICS HIT:: FETCH() MAP() AND STYLE PROPS

  ! Use clearer language on silver and gold (REWRITE THIS ING)
  
  BRONZE--

  Use the DayThreeComp to build a component that lets the user type into an input field.
  Make sure that your input field's value is stored in state, and that state shows the value
  in the input field (2-way data binding).  

  SILVER--

  Do the Bronze Challenge, but add a second input field.  Make sure that its value is also
  managed by state using 2-way binding.  Make an h1 tag below these input fields that shows
  the value of the input field which has the longer text. You'll need to write some logic to check which value is longer. Your page may look like the below:

  [this is some text]
  [this is some longer text]
  <h1>this is some longer text</h1>

  GOLD--
  
  Create a way for the header tag to alert someone that they need to type something into the inputs to engage without logic, while keeping the ability to show the value of the longer input in the <h2>. You may need to tear out the initial set up for the conditional rendering it make this work. 
*/

// ***************************************************************************

// SOLUTION

/* BRONZE

const [textOne, setTextOne] = useState('');

<Input value={textOne} onChange={(event) => {console.log(event.target.value); setTextOne(event.target.value)}} />
*/