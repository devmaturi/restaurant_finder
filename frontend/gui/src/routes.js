import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantList from './containers/RestaurantListView';
import RestaurantDetail from './containers/RestaurantDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={RestaurantList} />
        <Route exact path='/:restaurantID' component={RestaurantDetail} />
    </div>
);

export default BaseRouter;