import axios from 'axios';
import React, { useState } from 'react';
import { allApiObject } from '../ALL_API/Api';
import { Link } from 'react-router-dom';
import './AddTodo.css';

function AddTodo() {

    const [todoInput, gettodoInput] = useState(
        {
            todoTitle: '',
            todoDetails: ''
        }
    );

    const handleChange = (e) => {
        const Name = e.target.name;
        gettodoInput(
            {
                ...todoInput,
                [Name]: e.target.value
            }
        )
    };

    const handleSubmit = (e) => {
        const { todoTitle, todoDetails } = todoInput;

        e.preventDefault();
        const formdata = new FormData();
        const addApi = allApiObject.addList();


        const object = {
            "todo_title": todoTitle,
            "todo_Details": todoDetails
        };

        for (let element in object) {
            formdata.append(element, object[element]);
        };

        axios.post(addApi, formdata)
            .then((res) => {
                console.log(res.data);
                if (res.data.flag === '1') {
                    alert('Your list is successfully add');
                }
            });

        gettodoInput(
            {
                todoTitle: '',
                todoDetails: ''
            }
        );
    };

    const { todoTitle, todoDetails } = todoInput;

    return (

        <div className='Add_todo'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='todoTitle' value={todoTitle} placeholder='Add Title' onChange={handleChange} />
                </div>
                <div>
                    <input type='text' name='todoDetails' value={todoDetails} placeholder='Add Details' onChange={handleChange} />
                </div>
                <div>
                    <input type='submit' value='Add' />
                </div>
                <div>
                    <button type='button' >
                        <Link to='/Display' style={{ textDecoration: 'none', color: 'white' }} >Display</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;