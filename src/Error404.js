import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <section>
            <h1>Task not found</h1>
            <p>
                Return to <Link to="/">list</Link> и
                choose some other
            </p>
        </section>
    );
}
