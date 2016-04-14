import React from 'react';
import ReactDOM from 'react-dom';

import MomentWrapper from './chapter-libs/moment_wrapper'

ReactDOM.render(<MomentWrapper date={new Date("05/19/2009")} format="YYYY/MM/DD" />, document.getElementById('container'));
