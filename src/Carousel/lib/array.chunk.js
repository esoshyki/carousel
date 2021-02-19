const getChunk = (array, _size, start) => {
  let chunk = [];
  let size = _size;
  if (start < 0) {
    chunk = array.slice(start);
    size = _size + start;   
  }

  for (let i = 0; i < size; i++) {
    chunk.push(array[(start + i) % array.length])
  };
  return chunk

}

const getAllChunk = ({array, size, current}) => {

  const cur = getChunk(array, size, current);
  const prev = getChunk(array, size, current - size)
  const next = getChunk(array, size, current + size);

  return [...prev, ...cur, ...next]
}

export default getAllChunk