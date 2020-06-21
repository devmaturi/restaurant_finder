import React from 'react';
import { Form, Input, Button } from 'antd';

const CustomForm = () => {
const handleSubmit = (event) => {

}
  return (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          <Input name="title" placeholder="Enter Title" />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="description" placeholder="Enter Restaurant Description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;