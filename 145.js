const splitTheBill = (x) => {
  let vals = Object.values(x),
    avg = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce(
    (y, v) => ((y[v] = +(x[v] - avg).toFixed(2)), y),
    {}
  );
};
