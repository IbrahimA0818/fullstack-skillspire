import React from 'react';
import styles from './TodoList.module.css';

const TodoList = () => {
    const Todoitems = [
        {id: 1, text: "Learn React components", completed: false},
        {id: 2, text: "create react app", completed: false},
        {id: 3, text: "style with css modules", completed: true},
        {id: 4, text: "practice react", completed: true}
    ];
    return(
        <div className={styles.todocontainder}>
        <h2 className={styles.title}>My Todo List</h2>
      
      {Todoitems.length === 0 ? (
        <p className={styles.emptyMessage}>No todo items yet. Add some tasks!</p>
      ) : (
        <ul className={styles.todoList}>
          {Todoitems.map((item) => (
            <li 
              key={item.id} 
              className={`${styles.todoItem} ${item.completed ? styles.completed : ''}`}
            >
              <span className={styles.todoText}>{item.text}</span>
              {item.completed && <span className={styles.checkmark}>✓</span>}
            </li>
          ))}
        </ul>
      )}
      
      {/* Input field and button for styling purposes */}
      <div className={styles.inputSection}>
        <input 
          type="text" 
          placeholder="Add a new todo..." 
          className={styles.todoInput}
        />
        <button className={styles.addButton}>Add</button>
      </div>
    </div>
    );
};
export default TodoList;