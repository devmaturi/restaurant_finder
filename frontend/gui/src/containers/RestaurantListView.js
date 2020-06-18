import React from 'react';
import Restaurants from '../components/Restaurant';
import Axios from 'axios';

class RestaurantList extends React.Component {
    state = {
        Restaurants: []
    }
    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                Restaurants: res.data
            });
        })
    }
    render(){
        return (
            <Restaurants data={this.state.Restaurants} />
        );
    }
}
export default RestaurantList;