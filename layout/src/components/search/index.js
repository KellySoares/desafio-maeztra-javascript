import React from "react";
import { Button } from "@mui/material";
import { Form } from 'react-bootstrap';


const Search = () => {
    return (
        <Form className="d-flex">
            {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            /> */}
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search;