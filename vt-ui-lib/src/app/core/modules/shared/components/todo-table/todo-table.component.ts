import { Component } from '@angular/core';

@Component({
  selector: 'vt-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent {
  todos: Todo[] = [
    { task: 'Task 1' },
    { task: 'Task 2' },
    { task: 'Task 3' },
    // Add more todo items as needed
  ];

  dragIndex!: number;

  onDragStart(event: DragEvent, index: number): void {
    this.dragIndex = index;
    event.dataTransfer?.setData('text/plain', 'dragging');
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, index: number): void {
    event.preventDefault();
    const droppedData = event.dataTransfer?.getData('text/plain');
    if (droppedData === 'dragging') {
      const draggedTodo = this.todos[this.dragIndex];
      this.todos.splice(this.dragIndex, 1);
      this.todos.splice(index, 0, draggedTodo);
    }
  }
}

interface Todo {
  task: string;
}
