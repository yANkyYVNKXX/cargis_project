import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PublicRoutes} from 'core/routes/routes';

import {DefaultLayout} from 'presentation/layouts/default_layout';

import 'styles/global.scss';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
          <form onSubmit={(e)=>alert(1)}>
              <input type="text" id="card-number" name="cardnumber" autoComplete="cc-number" required/>
          <input
              autoComplete="cc-exp"
              placeholder="ГГ"
          />
              <input type="text" id="card-cvc" name="cardcvc" autoComplete="cc-csc" required/>
              <button type='submit'>отправить</button>
          </form>
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
