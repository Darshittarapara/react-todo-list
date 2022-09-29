import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { allApiObject } from '../ALL_API/Api';
import EditDeleteButton from '../EditDeleteButton/EditDeleteButton';
function DisplayList() {
    const [items, setTodoItems] = useState([]);
console.log(allApiObject.getList())
    // useEffect(() => {
    //     const displayList = allApiObject.getList();
    //     console.log(displayList)
    //     axios.get(displayList)
    //         .then((res) => {
    //             setTodoItems(res.data.todo_list);
    //             console.log(res.data.todo_list);
    //         })
    // }, []);

    const handleListAPI = (res) => {
        console.log(res);
    }
    return (
        <div className='display-list'>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>title</td>
                        <td>details</td>
                        <td>datetime</td>
                    </tr>
                </thead>

                <tbody>
                    {items.map((list, index) => {
                        return (
                            <tr key={`${index}`}>
                                <td>{list.todo_id}</td>
                                <td>{list.todo_title}</td>
                                <td>{list.todo_details}</td>
                                <td>{list.todo_datetime}</td>

                                <td>
                                    <EditDeleteButton id={list.todo_id} />
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayList;