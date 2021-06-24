import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export class InputForm extends Component {
    render() {
        return (
            <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Picture Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Picture Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
                
            </div>
        )
    }
}

export default InputForm
