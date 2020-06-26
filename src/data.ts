export interface ListData {
    tasks: {
        [key: string]: {
            id: string;
            content: string;
        }
    };
    lists: {
        [key: string]: {
            id: string;
            title: string;
            taskIds: string[]
        }
    };
    listOrder: string[];
}

export const listData: ListData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Take the dog out'},
        'task-2': {id: 'task-2', content: 'Paint the bedroom'},
        'task-3': {id: 'task-3', content: 'Be a decent human being'},
        'task-4': {id: 'task-4', content: 'Learn deno.js'},
        'task-5': {id: 'task-5', content: 'Remember to drink water'},
        'task-6': {id: 'task-6', content: 'fix waterpump'}
    },
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'TODO',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
        },
        'list-2': {
            id: 'list-2',
            title: 'In progress',
            taskIds: []
        },
        'list-3': {
            id: 'list-3',
            title: 'Done',
            taskIds: []
        },
    },
    listOrder: ['list-1', 'list-2', 'list-3'],
}