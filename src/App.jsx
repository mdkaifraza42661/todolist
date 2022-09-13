import React, {useState} from "react";
import TODOLists from "./TODOLists";
const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    };
    const listOfitem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("")
    };
    const deleteitems = (id) => {
        console.log('deleted')
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }
    return (<>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDO List</h1>
                <br />
                <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent} />
                <button onClick={listOfitem}> + </button>


                <ol>
                    {/* <li>{inputList}</li> */}
                    {Items.map((Itemsval, index) => {
                        {/* return <li>{Itemsval}</li> */}
                        return <TODOLists key={index} id={index}
                            text={Itemsval} onSelect={deleteitems} />
                    })}
                </ol>
            </div>
        </div>
    </>);

}
export default App;