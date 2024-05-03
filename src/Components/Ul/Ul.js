export default function Ul(props) {
    const list = props.taskList;
    return (
        <ul>
            {list.map((item, index) => <li key={index}>
                
                {item} 
                <a href="#" onClick={() => props.deleteTask(index)}>delete</a>
            </li>)}
        </ul>
    )
}