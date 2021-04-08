import React from 'react';
import { Form } from 'react-bootstrap';

const SourceFilter = ({value, onChange}) => {
    return (
        <Form>
            <Form.Control
                type="text" 
                placeholder="Filter..."
                value={value}
                onChange={event => onChange(event.target.value)}/>
        </Form>
    );
};

export default SourceFilter;