import { useState, useEffect } from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'

export default function TodosContainer(){
    const [todos, setTodos] = useState([])

    useEffect(()=> {
        const fetchData = async()=> {
            const res = await TodoModel.all()
            console.log(res)
            setTodos(res.data)
        }
        fetchData()
    }, [])

const createTodo = async(todo) => {
    let newTodo = {
        body: todo,
        completed: false
    }
    const anotherTodo = await TodoModel.create(newTodo)
    setTodos([...todos, anotherTodo.data])
}

    return (
        <div className='todosContainer'>
            <CreateTodoForm createTodo={createTodo} />
            <Todos todos={todos} />
        </div>
    );
}