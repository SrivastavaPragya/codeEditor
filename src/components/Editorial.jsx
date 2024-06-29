
import React, { useEffect, useRef } from "react";
import "../styles/Discription.css";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import { useNavigate } from "react-router-dom";

const Editorial = () => {




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
              <a className="active" href="#description" onClick={() => handleNavigation('/')}>
                Description
              </a>
              <a href="#editorial" onClick={() => handleNavigation('/editorial')}>Editorial</a>
              <a href="#solution">Solution</a>
            
              <a href="#submit">Submit</a>
            </div>
            <div className="leftContainerDown">
              <h1>Solution Article</h1>
             
              <h1>Algorithm</h1>
              <p>
              The brute force approach is simple. Loop through each element xxx and find if there is another value that equals to target−xtarget - xtarget−x.
              </p>
             
              <h1>Implementation</h1>
              <p>
              class Solution:
    def twoSum(self, nums: List[int], target: int)  List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]
              </p>
             
              <h4>Complexity Analysis</h4>
              <div className="div1">
                <p>Time complexity: O(n^2). For each element, we try to find its complement by looping through the rest of the array which takes O(n) time. Therefore, the time complexity is O(n^2).</p>
                <p>Space complexity: O(1). The space required does not depend on the size of the input array, so only constant space is used.</p>
              </div>
              <h4>Approach 2: Two-pass Hash Table</h4>
              <div className="div1">
               <p>To improve our runtime complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to get its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.</p>
               <br />
               <p>We can reduce the lookup time from O(n)O(n)O(n) to O(1)O(1)O(1) by trading space for speed. A hash table is well suited for this purpose because it supports fast lookup in near constant time. I say "near" because if a collision occurred, a lookup could degenerate to O(n)O(n)O(n) time. However, lookup in a hash table should be amortized O(1)O(1)O(1) time as long as the hash function was chosen carefully.</p>
              </div>
              <h4>Algorithm</h4>
              <div className="div1">
               <p>A simple implementation uses two iterations. In the first iteration, we add each element's value as a key and its index as a value to the hash table. Then, in the second iteration, we check if each element's complement (target−nums[i]target - nums[i]target−nums[i]) exists in the hash table. If it does exist, we return current element's index and its complement's index. Beware that the complement must not be nums[i]nums[i]nums[i] itself!</p>
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


export default Editorial
