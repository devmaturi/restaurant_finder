import React from 'react';
import Axios from 'axios';
import { Card } from 'antd';

class RestaurantDetail extends React.Component {
    state = {
        Restaurant: {}
    }
    componentDidMount() {
        const restaurantID = this.props.match.params.restaurantID;
        Axios.get(`http://127.0.0.1:8000/api/${restaurantID}`)
        .then(res => {
            this.setState({
                Restaurants: res.data
            });
        })
    }
    render(){
        const {title, description} = this.state.Restaurant;
        return (
            <Card title={title}>
                <p>{description}</p>
            </Card>
        );
    }
}
export default RestaurantDetail;