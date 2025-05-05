import TodoList from "./TodoList";

function App() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
            }}
        >
            <div style={{ minWidth: "300px" }}>
                <TodoList />
            </div>
        </div>
    );
}

export default App;