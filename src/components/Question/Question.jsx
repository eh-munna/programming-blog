import React from 'react';

const Question = () => {
  return (
    <div className="grid grid-cols-1 md:gap-8 space-y-2 md:space-y-3 pb-4">
      <div>
        <h4 className="font-semibold text-lg">
          What are the difference between props and state?
        </h4>
        <p className="my-2">
          There some difference between props and state. Such as,
        </p>
        <ul className="space-y-2 md:space-y-3 list-inside list-disc">
          <li>
            Props' value cannot change because it is read only whereas state
            value can be changed. Actually state is use for the intention that
            something will be changed later in the code
          </li>
          <li>
            Props can be accessed by the child component. On the other hand,
            state cannot be accessed by child components
          </li>
          <li>
            Props make components reusable. However, State cannot make
            components reusable
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg">How does useState works?</h4>
        <ul className="space-y-2 md:space-y-3 list-inside list-disc">
          <li>
            Use state is a react hook which allows us to change a state on our
            website whenever any interaction happens.
          </li>
          <li>It returns an array with two values</li>
          <li>
            The initial or current state. During the first render, will match
            the initialState we have passed.
          </li>
          <li>
            The set function that allows us to update the state to a different
            value and trigger a re-render.
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg">
          What are the purpose of useEffect other than fetching data?
        </h4>
        <p className="my-2">Some usage of useEffect</p>
        <ul className="space-y-2 md:space-y-3 list-inside list-disc">
          <li>
            Adding event listeners is one of the helpful usage of useEffect.
            This is useful when you need to listen for events such as scrolling,
            resizing, or key presses
          </li>
          <li>
            We can use the useEffect to trigger an animation. For example,
            adding new product on a shopping cart as a side effect
          </li>
          <li>
            useEffect can be used to control the behavior of a component based
            on its state or props. For example, we can use useEffect to disable
            a button when a form is not complete
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg">How Does React work?</h4>
        <ul className="space-y-2 md:space-y-3 list-inside list-disc">
          <li>
            The JavaScript library allows us to build user interfaces by
            providing a component-based architecture. We create components and
            then they are rendered by react efficient rendering engine. The
            rendering engine uses a virtual DOM to keep track of the state of
            each component. When a component's state changes, react updates the
            virtual DOM and compares the updated virtual DOM to the previous
            version to identify the minimum number of changes needed to update
            the real DOM. Eventually, react changes the necessary portion of the
            webpage and provide the user interface.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question;
