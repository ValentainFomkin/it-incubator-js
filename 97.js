function twiceAsOld(dadYearsOld, sonYearsOld) {
  let dif = dadYearsOld - sonYearsOld;
  let mult = dif * 2;
  let res = mult - dadYearsOld;
  return res;
}
console.log(twiceAsOld(55, 30));
