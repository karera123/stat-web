import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import { routes } from './utils/routes';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {
            routes.map((route, index) => {
              return <Route key={index + '-' + route.href} path={route.href} element={route.element} />
            })
          }
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
