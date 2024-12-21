# Unexpected NaN in JavaScript Function Due to Undefined Handling

This repository demonstrates a common yet subtle bug in JavaScript related to how functions handle undefined values. The provided code showcases this bug and offers a corrected solution.

## Bug Description

The `foo` function aims to perform different operations based on whether the input `x` is null, negative, or positive. However, it lacks explicit handling for the `undefined` value, leading to an unexpected `NaN` result when `undefined` is passed as an argument.

## Bug Solution

The solution involves adding an explicit check for `undefined` to ensure that the function behaves correctly in all cases. This enhancement provides more robust error handling and predictable output.

## How to reproduce

1. Clone the repository
2. Open bug.js and bugSolution.js files
3. Run the code using a JavaScript interpreter or browser console
4. Observe the unexpected NaN in the original code and the corrected output in the fixed version.