import React from 'react';

const Question = () => {
  return (
    <div className="grid grid-cols-1 md:gap-8 space-y-2 md:space-y-3">
      <div>
        <h4 className="font-semibold text-lg">
          What are the difference between props and state?
        </h4>
        <ul className="space-y-2 md:space-y-3 list-inside list-disc">
          <li>
            There some difference between props and state. Such as, props' value
            cannot change because it is read only whereas state value can be
            changed. Actually state is use for the intention that something will
            be changed later in the code
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
          <li>
            It returns an array with two values
            <ul className="list-inside list-disc">
              <li>
                The initial or current state. During the first render, will
                match the initialState we have passed.
              </li>
              <li>
                The set function that allows us to update the state to a
                different value and trigger a re-render.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h4></h4>
      </div>
      <div>
        <h4>How Does React work?</h4>
      </div>
    </div>
  );
};

export default Question;
