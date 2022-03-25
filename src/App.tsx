import { Provider } from 'react-redux';
import './App.css'
import { PostList } from './components/PostsList/PostList'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostList />
    </div>
    </Provider>
  );
}

export default App;
