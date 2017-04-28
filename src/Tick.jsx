import React from 'react';

export default function Tick() {
  const timer = (
    <div>
        The time taken is {new Date().toLocaleDateString()}
      <br />
    </div>
    );
  return (
    <div> {timer}</div>
  );
}
