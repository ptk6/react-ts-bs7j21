// import * as React from 'react';
// import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import List from './list.js';
import withListLoading from './withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://hiring.bajajfinservhealth.in/api/renderMe`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{' '}
          <span role="img" aria-label="love">
            💚
          </span>{' '}
          with by Prateek Ranjan Padhi(1905263)
        </div>
      </footer>
    </div>
  );
}
export default App;
