import React, { useEffect, useRef } from "react";
import "../styles/Discription.css";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import { useNavigate } from "react-router-dom";

const Discription = () => {
  const textAreaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cmInstance;
    if (textAreaRef.current) {
      cmInstance = CodeMirror.fromTextArea(textAreaRef.current, {
        mode: "javascript",
        theme: "monokai",
        lineNumbers: true,
      });
    }
    return () => {
      if (cmInstance) {
        cmInstance.toTextArea();
      }
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="leftContainer">
        <div className="leftContainerUpper">
          <a className="active"  onClick={() => handleNavigation('/')}>
            Description
          </a>
          <a  onClick={() => handleNavigation('/editorial')}>Editorial</a>
          <a >Solution</a>
        
          <a >Submit</a>
        </div>
        <div className="leftContainerDown">
          <h1>1. Two Sum</h1>
          <p>
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target.
          </p>
          <p>
            You may assume that each input would have exactly one solution, and
            you may not use the same element twice.
          </p>
          <p>You can return the answer in any order.</p>
          <h4>Example 1:</h4>
          <div className="div1">
            <p>Input: nums = [2,7,11,15], target = 9</p>
            <p>Output: [0,1]</p>
            <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]</p>
          </div>
          <h4>Example 2:</h4>
          <div className="div1">
            <p>Input: nums = [2,7,11,15], target = 9</p>
            <p>Output: [0,1]</p>
            <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]</p>
          </div>
          <h4>Example 3:</h4>
          <div className="div1">
            <p>Input: nums = [2,7,11,15], target = 9</p>
            <p>Output: [0,1]</p>
            <p>
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]=
              [2,7,11,15], target = 9= [2,7,11,15], target = 9.
            </p>
          </div>
          <div className="constraints">
            <h3>Constraints:</h3>
            <p>
              <span className="dot">•</span>
              <span className="cons"> 2 nums.length 104</span>
            </p>
            <p>
              <span className="dot">•</span>
              <span className="cons">109 nums[i] 109 </span>
            </p>
            <p>
              <span className="dot">•</span>
              <span className="cons"> 109 target 109</span>
            </p>
            <h4>
              <span className="dot1">•</span> Only one valid answer exists.
            </h4>
            <h3>
              Follow-up: Can you come up with an algorithm that is less than O(n
              <sup>2</sup>) time complexity?
            </h3>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="sec1">
          <div className="rightContainerUpper">
            <select name="languages" id="language-select">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="text/x-java">Java</option>
              <option value="text/x-csharp">C#</option>
            </select>
          </div>
             
             
                 
                  <textarea
                    ref={textAreaRef}
                    placeholder="/* Enter code here */"
                  ></textarea>
        </div>
        <div className="sec2">
          <button className="save">Run</button>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Discription;
