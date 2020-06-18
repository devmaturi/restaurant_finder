import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import RestaurantList from './containers/RestaurantListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <RestaurantList />
        </CustomLayout>
    </div>
  );
}

export default App;
