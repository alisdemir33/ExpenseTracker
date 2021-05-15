const FormVisibleToggle = (props) => {

    const onToggleHandler = () => {
        props.onToggle();
    }

    return (
        <div className="new-expense">
            <div className="new-expense__actions">
                <button onClick={onToggleHandler} >Add Expense</button>
            </div>
        </div>
    );

}
export default FormVisibleToggle;