import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PublicRoutes} from 'core/routes/routes';

import {DefaultLayout} from 'presentation/layouts/default_layout';

import 'styles/global.scss';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
          <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="expire-date-month">Expiration Date:</label>
          <input
              type="text"
              name="expire-date-month"
              id="expire-date-month"
              autoComplete="cc-exp-month"
              placeholder="MM"
          />
          <label htmlFor="expire-date-year">Expiration Date:</label>
          <input
              type="text"
              name="expire-date-year"
              id="expire-date-year"
              autoComplete="cc-exp-year"
              placeholder="ГГ"
          />
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
