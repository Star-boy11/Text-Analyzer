import Card from "react-bootstrap/Card";
import "./mainSection.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import cap from "../../assets/icons/sort-alpha-up.svg";
import Copy from "../../assets/icons/clipboard.svg";
import upper from "../../assets/icons/arrowupfill.svg";
import lower from "../../assets/icons/arrowdownl.svg";
import bold from "../../assets/icons/type-bold.svg";
import italic from "../../assets/icons/type-italic.svg";
import { useState } from "react";
import Preview from "../Preview/Preview";
import copy from "copy-to-clipboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainSection() {
  const [userInput, setUserInput] = useState("");
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isCopied, setCopied] = useState(false);

  const handleInput = (event) => {
    setUserInput(event.target.textContent);
  };

  const handleUpperCase = () => {
    let upperText = userInput.toUpperCase();
    setUserInput(upperText);
  };

  const handleLowerCase = () => {
    let lowerText = userInput.toLocaleLowerCase();
    setUserInput(lowerText);
  };

  const handleBold = () => {
    setBold((prevBold) => !prevBold);
  };

  const handleItalic = () => {
    setItalic((prevItalic) => !prevItalic);
  };

  const copytoClipboard = () => {
    const isCopied = copy(userInput);
    setCopied(isCopied);
    if (isCopied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  const handleCapitalize = () => {
    let capitalize = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    setUserInput(capitalize);
  };

  return (
    <>
      <Card className="bg-dark text-white custom-card">
        <Container className="mt-2">
          <Card.Title>Enter Your Text</Card.Title>
          <Card.Text>
            Welcome, To Text-Analyzer! Modify your text as per your need!
          </Card.Text>
          <div
            className="big-placeholder"
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
            }}
            contentEditable="true"
            onInput={handleInput}
          ></div>
          <h4>Number of words and characters</h4>
          <p>
            {userInput.trim().length === 0
              ? "0 words and 0 characters."
              : `${userInput.split(" ").length} words and ${
                  userInput.length
                } characters.`}
          </p>
          <Preview
            userInput={userInput}
            isBold={isBold}
            isItalic={isItalic}
          ></Preview>
          <div className="button-row mt-5">
            <Button
              variant="outline-primary"
              className="custom-button"
              onClick={handleCapitalize}
            >
              <img
                alt=""
                src={cap}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              &nbsp;Capitalize
            </Button>

            <Button
              variant="outline-secondary"
              className="custom-button"
              onClick={copytoClipboard}
            >
              <img
                alt=""
                src={Copy}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              &nbsp;{isCopied ? "Copied" : "Copy"}
            </Button>

            <Button
              variant="outline-danger"
              className="custom-button"
              onClick={handleUpperCase}
            >
              <img
                alt=""
                src={upper}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              &nbsp;UPPERCASE
            </Button>

            <Button
              variant="outline-success"
              className="custom-button"
              onClick={handleLowerCase}
            >
              <img
                alt=""
                src={lower}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              &nbsp;lowercase
            </Button>

            <Button
              variant="outline-warning"
              className={`custom-button ${isBold ? "active" : ""}`}
              onClick={handleBold}
            >
              <img
                alt=""
                src={bold}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              <strong>Bold</strong>
            </Button>

            <Button
              variant="outline-light"
              className={`custom-button ${isItalic ? "active" : ""}`}
              onClick={handleItalic}
            >
              <img
                alt=""
                src={italic}
                width="24"
                height="24"
                className="d-inline-block align-top"
              />
              <i>Italic</i>
            </Button>
          </div>
        </Container>
      </Card>
    </>
  );
}

export default MainSection;
