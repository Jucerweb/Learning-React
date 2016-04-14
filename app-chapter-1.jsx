import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './chapter-1/messages';
import Link from './chapter-1/link';

class App extends React.Component {
  render() {
    const url = 'http://koombea.com';

    return (
      <div>
        <Messages />
        <nav>
          <Link url={url} caption='Koombea Site' />
          <Link url='https://github.com/Jucerweb' caption='My Github' color='red'/>
        </nav>
      </div>
    )

  }
};

ReactDOM.render(<App />, document.getElementById('container'));

