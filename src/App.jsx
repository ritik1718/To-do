import { useState , useEffect } from 'react'
import Navbar from "./components/Navbar";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  useEffect(() => {
    
  }, )
  
   const handleAdd=  ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") 
  
    console.log(todo)
  }
   const handleCheckbox = (e)=>{
   let id =e.target.name;
   let index = todos.findIndex(item =>{
   return item.id === id
   })
   let newTodos = [...todos];
     newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
  }
  
  const handleDelete = (e,id) => {
    let newTodos = todos.filter(item=>{return item.id !== id});  
    setTodos(newTodos);
  };
  const handleEdit = (e ,id) => {
    let t = todos.filter(item =>item.id === id );
    setTodo(t[0].todo);
    console.log(setTodo);
  };
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-2 bg-violet-100">
        <h1 className="text-xl font-bold my-3">Add Todo</h1>
        <input
          className="p-4 rounded-lg w-3/4"
          type="text"
          onChange={handleChange}
        />
        <button
          className="font-bold text-xl bg-violet-800 text-white rounded-lg p-3 mx-3 hover:bg-violet-950"
          onClick={handleAdd}
        >
          Add
        </button>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map((items) => {
            return <div key = {items.id} className="todo flex justify-between w-3/4">
              <div className={items.isCompleted?"line-through": ""}>
                {items.todo}
              </div>
              <input type="checkbox" onChange={handleCheckbox} name={items.id} value={items.isCompleted}></input>
              <div className="buttons p-3  rounded-md">
                <button
                  className=" bg-violet-800 text-white rounded-lg p-3 mx-3 hover:bg-violet-950"
                  onClick={(e)=>{handleEdit(e, items.id)}}
                >
                  edit
                </button>
                <button
                  className="bg-violet-800 text-white rounded-lg p-3 mx-3 hover:bg-violet-950"
                  onClick={(e)=>{
                    confirm("make sure for delete")?handleDelete(e, items.id):setTodo("") }}
                >
                  delete
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
export default App;
