import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PublicRoutes} from 'core/routes/routes';

import {DefaultLayout} from 'presentation/layouts/default_layout';

import 'styles/global.scss';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          {PublicRoutes.map(({path, element}) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
