import styles from "../style.module.css"
let a =1
const Form =({todo,setTodo,todoList,setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value)
    }
    
    const handleSubmit=(event)=>{
        
        event.preventDefault()
        setTodoList([...todoList,{name:todo,id:a}]);
        console.log(todoList);
        a+=1
        setTodo("");
      
    }
    return (
        <div className="container">
        <div className={styles.todoform} >
            <form onSubmit={handleSubmit}>
                
                <input className={styles.todo_input} placeholder="Введите слово на английском" value={todo} onChange={handleChange}></input>
                <button type="submit" className={styles.todo_btn}>Добавить </button>
            </form>
        </div>
        </div>
    )
}
export default Form;