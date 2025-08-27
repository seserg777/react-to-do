const date1 = new Date(2024, 6, 18, 10, 24);
const date2 = new Date(2024, 6, 19, 14, 47);

const todos = [
    {
        title: 'React yeah!',
        desc: 'some description',
        image: '',
        done: true,
        createdAt: date1.toLocaleString(),
        key: date1.getTime()
    },
    {
        title: 'Create first React-app',
        desc: 'custom description',
        image: '',
        done: false,
        createdAt: date2.toLocaleString(),
        key: date2.getTime()
    }
];
export default todos;
