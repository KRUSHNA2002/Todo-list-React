import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo =()=>{

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("")



    const addTodo = () => {

      setTodos([...todos, todo])
      console.log(todos)

    }

    const removetodos = () => {
      
    }

    return(
      
       <div className="container d-flex justify-content-center align-items-center">
          <div className="col-5  my-5">

          <div className="col-md-12 my-4 text-center">
             <input type="text" style={{width:'60%'}}
               name='userName'
               value={todo}   
               onChange={(e) => setTodo(e.target.value)}
               placeholder='Enter your name'
             />


            <button onClick={addTodo}>Add Todo</button>
          </div>  

             <table className='table table-bordered'>
              <tr>
                <th>Name</th>
                <th>Delete</th>
              </tr>
             {            
               todos.map((val)=>{
                return(
                   <tr>
                    <td>{val}</td>
                    <td><button className='btn btn-primary' onChange={(e)=>removetodos(e.target.value)}>Delete</button></td>
                   </tr>
                );
              })}
             </table>

          </div>
       </div>
    );
}

export default Todo;