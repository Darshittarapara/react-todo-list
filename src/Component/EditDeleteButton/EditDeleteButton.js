import axios from 'axios';
import React from 'react';
import { allApiObject } from '../ALL_API/Api';

function EditDeleteButton(props) {

    const handleDelete = (e) => {
        const displayList = allApiObject.getList();
        const deleteApi = allApiObject.deleteList();
        const todoId = parseInt(e.target.id);
        const formdata = new FormData();
        formdata.append('todo_id', todoId);
        axios.post(deleteApi, formdata)
            .then((res) => {

            });
    }

    return (
        <>
            <button type='button' id={props.id}>Edit</button>
            <button type='button' id={props.id} onClick={handleDelete}>Delete</button>
        </>
    )
};

export default EditDeleteButton;