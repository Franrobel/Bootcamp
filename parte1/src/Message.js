


function Message(props) {

    const { name, age } = props
    console.log(props);
    return (
        <div style={{paddingTop: '20px'}}>
            <div> My name is {name}  and I'm {age} years old</div>

        </div>
    )
}

export default Message;