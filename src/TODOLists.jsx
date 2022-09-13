import React from "react";
const TODOLists = (props) => {



    return (<>
        <div className="todo_style">
            <i className="fa-sharp fa-solid fa-circle-xmark" onClick={() => {
                props.onSelect(props.id);
            }} />
            <li>{props.text}</li>

        </div>

    </>

    )


}

export default TODOLists;