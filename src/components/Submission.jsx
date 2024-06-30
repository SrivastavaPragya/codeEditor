import React, { useEffect, useRef } from "react";
import "../styles/Discription.css";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import { useNavigate } from "react-router-dom";

const Submission = () => {
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
    <>
     <div className="container">
      <div className="leftContainer">
        <div className="leftContainerUpper">
          <a className="active"  onClick={() => handleNavigation('/')}>
            Description
          </a>
          <a className="active"  onClick={() => handleNavigation('/editorial')}>Editorial</a>
          <a className="active"   onClick={() => handleNavigation('/solution')}>Solution</a>
        
          <a className="active"  onClick={() => handleNavigation('/submission')} >Submit</a>
        </div>
        <div className="leftContainerDown">
          <h1>Submissions</h1>
         
          <h4>Submission:1</h4>
          <div className="div1">
            <p>class Solution:
                <br />
    def twoSum(self, nums: List[int], target: int)  List[int]:
    <br />
        hashmap = {}
       
        for i in range(len(nums)):
       
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            <br />
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]] </p>
          </div>
          <h4>Submission:2</h4>
          <div className="div1">
            <p>class Solution:
                <br />
    def twoSum(self, nums: List[int], target: int)  List[int]:
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i</p>
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
    
    
    </>
  )
}

export default Submission
