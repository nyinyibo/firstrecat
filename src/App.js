import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './pages/main'

const App = () => {
    // return (
    //     <BrowserRouter>
    //       <div>
    //         <Route exact component={Main} path="/" />
    //       </div>
    //     </BrowserRouter>
    //   )
    return <Main />
}

export default App;