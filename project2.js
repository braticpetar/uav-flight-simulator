// Multiplies 2 3x3 matrices written in column-major form and returns in the same format
function multiplyM(m1, m2)
{
  // We make an empty array for the result
  const result = new Array(9);

  // Iterate through rows
  for (let i = 0; i < 3; ++i)
  {
    // Iterate through columns
    for (let j = 0; j < 3; ++j)
    {
      // i + j * 3 transforms 3x3 matrix indexes to 1d column-major order indexes
      result[i + j * 3] = 
      	m1[i + 0 * 3] * m2[0 + j * 3] +
      	m1[i + 1 * 3] * m2[1 + j * 3] +
      	m1[i + 2 * 3] * m2[2 + j * 3]; // We calculate dot product of m1 ith row and jth column and transform it to column major order
    }
  }

  return result;
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
  // Define variables
  const theta = rotation * Math.PI / 180;
  const sin = Math.sin(theta);
  const cos = Math.cos(theta);

  // Define transform matrices in column-major order
  let scaleM = [scale, 0, 0, 0, scale, 0, 0, 0, 1];
  let rotationM = [cos, sin, 0, -sin, cos, 0, 0, 0, 1];
  let translationM = [1, 0, 0, 0, 1, 0, positionX, positionY, 1];

  // Combining matrices to get translation * rotation * scale:
  
  // First we compute scale * rotation
  let SR = multiplyM(rotationM, scaleM);

  // Then we multiply it by translation
  let SRT = multiplyM(translationM, SR);
  
  return SRT;
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
  return multiplyM(trans2, trans1); // We simply multiply these transformation matrices
}



