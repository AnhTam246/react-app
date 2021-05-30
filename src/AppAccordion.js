import React, { Component } from 'react';

import Accordion from './components/accordian/Accordion';

class AppAccordion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppAccordion">
        <Accordion heading="Heading1">
          Demo children content
        </Accordion>
      </div>
    );
  }
}

export default AppAccordion;
