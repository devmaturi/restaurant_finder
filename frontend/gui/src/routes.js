import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantList from './containers/RestaurantListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={RestaurantList} />
        <Route exact path='/:restaurantID' component={RestaurantList} />
    </div>
);

export default BaseRouter;