function fifo(n, referenceList) {
  let res = new Array(n).fill(-1);
  let cur = 0;
  for (let i = 0; i < referenceList.length; i++) {
    if (!res.includes(referenceList[i])) {
      res[cur % n] = referenceList[i];
      cur++;
    }
  }
  return res;
}
