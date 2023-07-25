import "./preview.css"

function Preview(props){
    const {userInput, isBold, isItalic} = props;
    return(
        <>
            <h4>Preview</h4>
            <p style={{fontWeight: isBold ? "bold" : "normal", fontStyle: isItalic ? "italic": "normal"}} >{userInput}</p>
        </>
    );
}

export default Preview;