import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const AddRestaurant = () => {
    return (
        <Stack direction="horizontal" gap={2}>
            <Form.Control placeholder="Add restaurant here" />
            <Form.Select className="ms-5 w-25">
                <option>Pick a City</option>
            </Form.Select>
            <Button type="submit">Search</Button>
        </Stack>
    )
}
export default AddRestaurant