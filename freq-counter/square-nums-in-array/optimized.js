function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (num of arr1) {
    freqCounter1[num] = (freqCounter1[num] ?? 0) + 1;
  }

  for (num of arr2) {
    freqCounter2[num] = (freqCounter2[num] ?? 0) + 1;
  }

  for (key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }

    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
}
