import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo =()=>{

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("")



    const addTodo = () => {

      setTodos([...todos, todo])

    }

    const removetodos = (index) => {
      const newtodos=[...todos];
      newtodos.splice(index,1);
      setTodos(newtodos);
    }

    return(
      
       <div className="container d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 bg-primary my-5">

          <div className=" my-4 text-center">
             <input type="text" style={{width:'70%'}}
               name='userName'
               value={todo}   
               onChange={(e) => setTodo(e.target.value)}
               placeholder='Enter your name'
             />


            <button className='mx-2' onClick={addTodo}>Add Todo</button>
          </div>  
        
          <div className='p-4'>
            
          <table className='table table-bordered table-responsive '>
              <tbody>
              <tr className='text-center'>
                <th>Name</th>
                <th>Delete</th>
              </tr>
              </tbody>
             {            
               todos.map((val , index)=>{
                return(
                 <tbody>
                    <tr key={index} className='text-center'>
                    <td>{val}</td>
                    <td><button className='btn btn-danger ' onClick={()=>removetodos(index)}>Delete</button></td>
                   </tr>
                 </tbody>
                );
              })}
             </table>

          </div>

          </div>
       </div>
    );
}

export default Todo;