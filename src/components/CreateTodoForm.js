import React, { useState } from 'react';



const CreateTodoForm = (props) => {
    const [todo, setTodo] = useState('');

    const onInputChange = (e) => {
        setTodo(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        //call a function that is passed down a props
        props.createTodo(todo)
        setTodo('');
    }



    return (
        <div>
            <form onSubmit={ onFormSubmit }>
                <input 
                    onChange={onInputChange}
                    type="text" id="newItemDescription"
                    placeholder="New to-do here"
                    value={todo}
                />
                <button type='submit' id='addTask' className='btn'>Add to-do</button>
            </form>
        </div>
    );
}

export default CreateTodoForm;
