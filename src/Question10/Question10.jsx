import React, { useEffect, useState, Component } from "react";


const SpreadOperatorComponent = () => {
    return (
      <div>
        <h1>Spread operator</h1>
        <ul>
          <li style={{ listStylePosition: 'inside' }} >Is used for spreading elements</li>
          <p>If I have an array1 = [1, 2, 3]</p>
          <p>
            and I want to take it and some other excluded values into a new array,
            I do this:
          </p>
          <code>
            const array1 = [1, 2, 3]; <br />
            const array2 = [...array1, 4, 5];
          </code>
          <h3>The result would be a new array2 with values: [1, 2, 3, 4, 5]</h3>
          <h2>The elements were spread across and molded as spread-apart data.</h2>
        </ul>
      </div>
    );
  };

  const RestOperatorComponent = () => {
    return (
      <div>
        <h1>Rest operator</h1>
        <ul>
          <li style={{ listStylePosition: 'inside' }}>Is used for collecting elements</li>
          <p>
            If you have an array <code>[1, 2, 3, 4, 5]</code> and you want to
            gather some initial values into separate variables and the remaining
            elements into an array, you can use the rest operator:
          </p>
          <code>
            const [first, second, ...rest] = [1, 2, 3, 4, 5];
          </code>
            <h3>The result would be: first = 1, second = 2, rest = [3, 4, 5]</h3>
          <h2>The remains were collected and molded as a single array.</h2>
  
          <p>
            Additionally, the rest operator can be used in function parameters to
            collect an arbitrary number of arguments into an array:
          </p>
          <code>
            function sum(...numbers) {'{'} <br />
            return numbers.reduce((total, num) ={">"} total + num, 0); <br />
            {'}'} <br />
            sum(1, 2, 3, 4, 5);
          </code>
          <h2>The rest operator in function parameters helps handle a variable number of arguments.</h2>
        </ul>
      </div>
    );
  };


  const JSOperators = () => {
    return (
      <div style={{ display: "flex", margin: "5%" }}>
        <SpreadOperatorComponent />
        <RestOperatorComponent />
      </div>
    );
  };


  const UseEffectState = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>

        <h3>Notice that the text above (useState) is being affected, while each time it is, the useEffect changes the DOM.title to the same</h3>
        <h4>The useEffect is hooked onto the useState</h4>
      </div>
    );
  };



  class ErrorBoundaryComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error caught by error boundary:', error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong. Please try again later.</h1>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  
  const ChildComponent = ({ triggerError }) => {
    if (triggerError) {
      throw new Error('This is an error from ChildComponent');
    }
  
    return <div>This is a child component</div>;
  };
  
  const ErrorExample = () => {
    const [triggerError, setTriggerError] = React.useState(false);
  
    const handleButtonClick = () => {
      setTriggerError(true);
    };
  
    return (
      <div>
        <ErrorBoundaryComponent>
          <ChildComponent triggerError={triggerError} />
        </ErrorBoundaryComponent>
        <button onClick={handleButtonClick}>Trigger Error</button>
      </div>
    );
  };


  const CorsExplain = () => {
    return (
      <div>
        <h1>Same Origin Policy {"(SOP)"}</h1>
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Is a security policy that prevents JavaScript from making requests across domain boundaries.</li>
          <li>It is enforced by browsers.</li>
          <li>Webpages are dictated to only make requests to the same domain using the same protocol {"HTTP/HTTPS"} and same port number</li>
         
        </ul>

        <h1>Cross-Origin Resource Sharing {"(CORS)"}</h1>
        <ul style={{ listStylePosition: 'inside' }}>
          <li>Is a mechanism that allows resources to be requested from a specified domain.</li>
          <li>It is a way for the browser to say “I will let you have this even though it came from a different origin.”</li>
        </ul>

        <h1>How does it work?</h1>
        <code>
        The API server needs to include appropriate CORS headers in its responses. 
        Common headers include:
        <ul style={{listStylePosition: 'inside'}}>
        <li>Access-Control-Allow-Origin</li>
        <li>Access-Control-Allow-Methods </li>
        <li>Access-Control-Allow-Headers</li>
        </ul>
        </code>
        <p>Show DnD page</p>
      </div>
    );
  };
  
export { JSOperators , UseEffectState, ErrorExample, CorsExplain };
