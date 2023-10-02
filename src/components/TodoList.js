import Todo from "./Todo";

const TodoList = ({todolist ,setTodoList})=>{
    return <div className="container">
        {todolist.map((todoItem)=>(
            <Todo todoItem={todoItem} key={todoItem.id} setTodoList={setTodoList} todoList={todolist}/>
        ))}
    </div>;
}
export default TodoList;