# UAV Flight Simulator (CS4600 Project 2)
This is the second project within the University of Utah's CS4600 Computer Graphics course. It implements an interactive 2D UAV (drone) flight simulator, where the UAV follows mouse movements, responds to keyboard inputs and updates propellers, shadow and scrolling ground using 2D transformation matrices.

## Features

- Mouse movement
- Keyboard controlls for zoom, rotation and altitude
- Propeller rotation
- Shadow blur based on altitude
- Scrolling background based on UAV movement

## How it works

- The UAV follows the mouse position via event handling
- Keyboard inputs adjust scale, rotation and altitude
- Transformation matrices (3x3, column-major) are computed in project2.js
- The GetTransform() function applies scale, rotation and translation
- The ApplyTransform() function combines matrices for propellers and UAV
- Shadow and ground update dynamically based on UAV state

## How transformations work

Transformations use 3x3 matrices in column-major order with homogeneous coordinates to position and orient the UAV and propellers.
Each transformation (scale, rotation, translation) is represented as a matrix:
- Scale: Adjusts size based on a factor
- Rotation: Rotates by an angle (in degrees, converted to radians)
- Translation: Moves by x and y offsets

## Formula

This project uses 3x3 matrices stored in column-major order. For example, following matrix:

```js
| a00 a01 a02 |
| a10 a11 a12 |
| a20 a21 a22 |
```

is stored in a flat array as:

```js
[
  a00, a10, a20, // first column
  a01, a11, a21, // second column
  a02, a12, a22  // third column
]
```

### Matrix multiplication:

To multiply two matrices A and B we compute

```md
C = B x A
```

The result matrix C is calculated by:

```md
C[i][j] = B[i][0] * A[0][j] +
          B[i][1] * A[1][j] +
          B[i][2] * A[2][j]
```

### Transformation Composition Order

Order of applying these transformations is very important. The formula used is:

```md
FinalTransform = Translation x Rotation x Scale
```

So the object is:
1. Scaled
2. Then rotated
3. And finally moved

### Example transform matrices in column-major order

```js
  scaleMatrix = [scale, 0, 0, 0, scale, 0, 0, 0, 1];
  rotationMatrix = [cos, sin, 0, -sin, cos, 0, 0, 0, 1];
  translationMatrix = [1, 0, 0, 0, 1, 0, positionX, positionY, 1];
```

## Setup
1. Clone the repository:
```bash
git clone https://github.com/braticpetar/uav-flight-simulator
```
2. Open project2.html in a browser
3. Test by moving the mouse and using keys
