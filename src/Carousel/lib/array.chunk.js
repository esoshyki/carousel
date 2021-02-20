const getChunk = (array, _size, start) => {
  let size = _size;
  console.log(start)
  if (start < 0) {
    const reduce = array.length % size !== 0 ? array.length % size : size;
    start = array.length - reduce;
  };
  if (!array[start]) {
    start = 0;
  }
  return array.slice(start, start % array.length + size);
};

const getAllChunk = ({array, size, current}) => {

  const maxChunks = Math.round(array.length / size);
  
  const chunk = current % maxChunks;

  console.log(`start`, chunk)

  const cur = getChunk(array, size, chunk * size);
  const prev = getChunk(array, size, chunk * size - size)
  const next = getChunk(array, size, chunk * size + size);

  console.log({
    cur, prev, next
  })

  return ({
    cur, prev, next
  })
};

const array = [0, 1, 2];

getAllChunk({
  array,
  size: 2,
  current: -2
})

export default getAllChunk