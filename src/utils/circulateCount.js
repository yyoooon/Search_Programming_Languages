export const upCount = (startNumber, endNumber) => {
  return startNumber === endNumber ? 0 : startNumber + 1;
};

export const downCount = (startNumber, endNumber) => {
  return startNumber === 0 ? endNumber : startNumber - 1;
};
