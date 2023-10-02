import styles from "../style.module.css"

const Todo=({todoItem,todoList,setTodoList})=>{
    const deleteTodo=()=>{
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
        
    };
    return (
    <div className="container">
        <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.todobtn}>Удалить</button>
        </div>
    </div>)
};

export default Todo;