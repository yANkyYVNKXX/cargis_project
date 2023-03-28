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
              <label htmlFor="card-number">Номер карты:</label>
              <input type="text" id="card-number" name="cardnumber" autoComplete="cc-number" required/>

                  <label htmlFor="card-holder-name">Имя владельца карты:</label>
                  <input type="text" id="card-holder-name" name="cardholdername" autoComplete="cc-name" required/>
          <input
              type="text"
              name="expire-date-month"
              id="expire-date-month"
              autoComplete="cc-exp-month"
              placeholder="MM"
          />
          <input
              type="text"
              name="expire-date-year"
              id="expire-date-year"
              autoComplete="cc-exp-year"
              placeholder="ГГ"
          />
              <label htmlFor="card-cvc">CVC код:</label>
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
