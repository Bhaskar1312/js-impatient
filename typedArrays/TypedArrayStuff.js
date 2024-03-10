// Int8Array, Uint8Array, Uint8ClampedArray Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
// Fixed Element types, no holes
// Uint unsigned int
// Clamped: setting an out of range sets 0 or 255 nearest int, produced by HTML Canvas getImageData
// Negative indices count from the end of the array

// Array Buffers
// Data from a file, data stream, image etc. stored in array buffer
// Supported by File API, XMLHttpRequest, WebSockets, ...
// If the data is an array, construct a typed array to process the buffer contents
// const buffer = ...;
// const arr = new Uint16Array(buffer)
// If the data has a different structure, use a DataView instead
// const view = new DataView(buffer)
// Read with DataView methods getInt8, getInt16, getInt32, getUInt8, getUInt16, getUInt32, getFloat32, getFloat64
// let value  = view.getUint32(offset, true)
// Last parameter is true for little endian order, false(default) for big endian
// Write with set method:
// view.setUint32(offset, newValue, true)
// NOTE: Typed arrays always use the endianness of the host system

let fArray = Float32Array.of(1, 0.5, 0.25, 0.125, 0.0625, 0.03215, 0.015625)
console.log(fArray)
const uarr = Uint32Array.from(fArray, x =>1/x)
console.log(uarr)

console.log('// Assigning to out-of-range indexes and to properties')
fArray[-1] = 2; // No effect
fArray[0.5] = 1.414; // No effect
fArray.lucky = true // Sets the lucky property
console.log('fArray:', fArray) // Float32Array(7) [1, 0.5, 0.25, 0.125, 0.0625, 0.03215000033378601, 0.015625, lucky: true]