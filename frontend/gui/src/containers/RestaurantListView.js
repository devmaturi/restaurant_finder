import React from 'react';
import Restaurants from '../components/Restaurant';
import Axios from 'axios';
import CustomForm from '../components/Form';

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
            <div>
                <Restaurants data={this.state.Restaurants} />
                <br />
                <h2>Create a Restaurant</h2>
                <CustomForm/>
            </div>
        );
    }
}
export default RestaurantList;