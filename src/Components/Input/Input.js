
export default function Input(props) {


    return (
        <input value={props.inputValue} onChange={props.onChange} type="text" placeholder="Add task here" />
    )
}