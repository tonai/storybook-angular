import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { withThemes } from 'storybook-addon-themes/angular';

import { TaskListComponent } from '../app/task-list/task-list.component';
import { TaskComponent } from '../app/task/task.component';
import { taskData, actionsData } from './2-Task.stories';

export default {
  title: 'TaskList',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
    withThemes
  ],
  parameters: {
    themes: {
      list: [
        { name: 'twitter', color: '#00aced', default: true, class: 'theme-twt' },
        { name: 'facebook', color: '#3b5998', class: 'theme-fb' },
      ]
    }
  },
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];
export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

// default TaskList state
export const Default = () => ({
  component: TaskListComponent,
  template: `
  <div style="padding: 3rem">
    <app-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
  </div>
`,
  props: {
    tasks: defaultTasksData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

// tasklist with pinned tasks
export const WithPinnedTasks = () => ({
  component: TaskListComponent,
  template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
  `,
  props: {
    tasks: withPinnedTasksData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

// tasklist in loading state
export const Loading = () => ({
  template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="[]" loading="true" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
      `,
});

// tasklist no tasks
export const Empty = () => ({
  template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="[]" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
        </div>
      `,
});
