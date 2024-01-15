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

    const clearAll=()=>{

      const cleartodos=[];
      setTodos(cleartodos);
    }
    return(
      
       <div className="container d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 bgcolor my-5">

          <div className=" my-4 text-center input11">
             <input type="text" style={{width:'80%',height:'35px' ,textAlign:'center'}}
               name='userName'
               value={todo}   
               onChange={(e) => setTodo(e.target.value)}
               placeholder='Enter your tasks'
             />


            <button className='mx-2 btn btn-primary' onClick={addTodo}><i class="fa fa-plus" aria-hidden="true"></i></button>
          </div>  
        
          <div className='p-4'>
            
          <table className='table table-bordered table-responsive '>
              <tbody>
              <tr className='text-center'>
                <th style={{width:"80%"}}>Tasks</th>
                <th style={{width:"20%"}}>Delete</th>
              </tr>
              </tbody>
             {            
               todos.map((val , index)=>{
                return(
                 <tbody>
                    <tr key={index} className='text-center'>
                    <td className='tasks'>{val}</td>
                    <td><button className='btn btn-danger ' onClick={()=>removetodos(index)}><i class="fas fa-trash-alt"></i></button></td>
                   </tr>
                 </tbody>
                );
              })}
             </table>

          </div>

          <div>
             <div className="row  mb-3">
               <div className="col-md-8 col-12 text-center text-white my-1">
                    <h5>You have {todos.length} pending task ...</h5>
               </div>
               <div className="col-md-4 col-12 text-center">
                      <button className='btn btn-dark' onClick={clearAll}>Clear all</button>
               </div>
             </div>
          </div>

          </div>
       </div>
    );
}

export default Todo;