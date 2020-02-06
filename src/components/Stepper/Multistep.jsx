import React, { useState } from "react";
// import "../../.././src/App.scss";
import "./stepper.css";

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var getNavStyles = function getNavStyles(indx, length, props) {
  var styles = [];
  // let p = props.steps[indx];
  // let name = p.name
  for (var i = 0; i < length; i++) {
    // let name = localStorage.getItem(props.steps[i].name);
    // if (i < indx && name === "true") {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
    //   if(props.steps.find(step => step.name === "Bloodpanel")){
    //     if (i < indx && localStorage.getItem("Bloodpanel") === true) {
    //         styles.push('done');
    //       } else if (i === indx) {
    //         styles.push('doing');
    //       } else {
    //         styles.push('todo');
    //       }
    //   }
    //   else if(props.steps.find(step => step.name === "Questionaries")){
    //     if (i < indx && localStorage.getItem("Questionaries") === true) {
    //         styles.push('done');
    //       } else if (i === indx) {
    //         styles.push('doing');
    //       } else {
    //         styles.push('todo');
    //       }
    //   }
    //   else if(props.steps.find(step => step.name === "Medicalhistory")){
    //     if (i < indx && localStorage.getItem("Medicalhistory") === true) {
    //         styles.push('done');
    //       } else if (i === indx) {
    //         styles.push('doing');
    //       } else {
    //         styles.push('todo');
    //       }
    //   }
    //   else if(props.steps.find(step => step.name === "Familymedicalhistory")){
    //     if (i < indx && localStorage.getItem("Familymedicalhistory") === true) {
    //         styles.push('done');
    //       } else if (i === indx) {
    //         styles.push('doing');
    //       } else {
    //         styles.push('todo');
    //       }
    //  }
    //  else if(props.steps.find(step => step.name === "CallRecording")){
    //     if (i < indx && localStorage.getItem("CallRecording") === true) {
    //         styles.push('done');
    //       } else if (i === indx) {
    //         styles.push('doing');
    //       } else {
    //         styles.push('todo');
    //       }
    //  }
  }

  return styles;
};

var getButtonsState = function getButtonsState(indx, length, props) {
  if (indx > 0 && indx < length - 2) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else if (indx === length - 1) {
    return {
      showPreviousBtn: false,
      showNextBtn: false
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
};

function MultiStep(props) {
  var _useState = useState(getNavStyles(0, props.steps.length, props)),
    _useState2 = _slicedToArray(_useState, 2),
    stylesState = _useState2[0],
    setStyles = _useState2[1];

  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    compState = _useState4[0],
    setComp = _useState4[1];

  var _useState5 = useState(getButtonsState(0, props.steps.length, props)),
    _useState6 = _slicedToArray(_useState5, 2),
    buttonsState = _useState6[0],
    setButtons = _useState6[1];

  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length, props));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length, props));
  }

  var next = function next() {
    // e.preventDefault();
    // StorageEvent.dispatch(type, action)
    localStorage.setItem("Submitted", false);
    return setStepState(compState + 1);
  };

  var previous = function previous() {
    // e.preventDefault();
    localStorage.setItem("Submitted", false);
    return setStepState(compState > 0 ? compState - 1 : compState);
  };

  var handleKeyDown = function handleKeyDown(evt) {
    return evt.which === 13 ? next(props.steps.length) : {};
  };

  var handleOnClick = function handleOnClick(evt) {
    evt.preventDefault();
    if (
      evt.currentTarget.value === props.steps.length - 1 &&
      compState === props.steps.length - 1
    ) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };

  var renderSteps = function renderSteps() {
    return props.steps.map(function(s, i) {
      return React.createElement(
        "li",
        {
          // style:i===4 ?{content:parseInt("f059", 8) }:{content:parseInt("039F", 8)},
          className: "progtrckr-" + stylesState[i],
          onClick: handleOnClick,
          key: i,
          value: i
        },
        React.createElement("em", null, i + 1),
        React.createElement("span", null, props.steps[i].name)
      );
    });
  };

  return React.createElement(
    "div",
    {
      className: "container"
    },
    React.createElement(
      "ol",
      {
        className: "progtrckr"
      },
      renderSteps()
    ),
    props.steps[compState].component,
    React.createElement(
      "div",
      {
        style: props.showNavigation
          ? {
              display: "flex",
              justifyContent: "center",
              marginTop: "-64px"
            }
          : {
              display: "none"
            }
      },
      React.createElement(
        "button",
        {
          className: "prevStyle",
          // className:buttonsState.showPreviousBtn?localStorage.getItem("Submitted") === "true"?'outputPagePrevButton':'prevButtonShow':'displayPrev',

          style: buttonsState.showPreviousBtn
            ? {
                color: "#0275d8",
                backgroundColor: "#6c757d",
                borderColor: "red !important",
                padding: "0.25rem 0.5rem",
                fontSize: "0.76563rem",
                marginRight: "97px",
                marginTop: "62px",
                marginBottom: "35px",
                lineHeight: "1.5",
                borderRadius: "0.2rem",
                border: "1px solid transparent",
                transition:
                  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
              }
            : {
                display: "none"
              },
          onClick: previous
        },
        "« Back"
      ),
      React.createElement(
        "button",
        {
          className: "nextStyle",
          id: "nextId1",
          // className:buttonsState.showNextBtn?localStorage.getItem("Submitted") === "true"?'outputPageNextButton':'nextButtonShow':'displayNext',
          style: buttonsState.showNextBtn
            ? // compState ===0 ? {
              //     color: "#fff",
              //     marginTop: "63px",
              //     // width:"9%",
              //     marginBottom: "34px",
              //     marginLeft: "173px",
              //     borderColor: "#4dbd74",
              //     padding: "0.25rem 0.5rem",
              //     fontSize: "0.76563rem",
              //     lineHeight: "1.5",
              //     marginLeft:"12px",
              //     borderRadius: "0.2rem",
              //     backgroundColor:"#4dbd74",
              //     border: "1px solid transparent",
              //     transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
              // } :
              {
                color: "#0275d8",
                marginTop: `${compState === 0 ? "64px" : "62px"}`,
                marginBottom: "34px",
                marginLeft: `${compState === 0 ? "173px" : "12px"}`,
                borderColor: "#4dbd74",
                padding: "0.25rem 0.5rem",
                fontSize: "0.76563rem",
                lineHeight: "1.5",
                borderRadius: "0.2rem",
                backgroundColor: "#4dbd74",
                border: "1px solid transparent",
                transition:
                  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
              }
            : {
                display: "none"
              },
          onClick: next
        },
        "Next »"
      )
    )
  );
}
MultiStep.defaultProps = {
  showNavigation: true
};

export default MultiStep;
//# sourceMappingURL=index.js.map
