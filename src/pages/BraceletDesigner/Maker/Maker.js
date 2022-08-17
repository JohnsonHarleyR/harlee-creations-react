import React from 'react';
import './resources/styling/maker.css';
import Stage from './subcomponents/Stage';
import Controls from './subcomponents/Controls';
import Instructions from './subcomponents/Instructions';
import { MainInstructionItems } from './resources/constants/instructionConstants';
import MakerProvider from './MakerContext';
import './App.css';

const Maker = () => {

  return (
    <MakerProvider>
      <div id="bracelet-maker">
      <h1>Bracelet Designer</h1>
      <Instructions
        linkText={"Instructions"}
        pages={MainInstructionItems}
      />
      <Controls />
      <br></br>
      <Stage />
    </div>
    </MakerProvider>
    
  );
}

export default Maker;