const getFrequencies = arr =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {});

---

function getFrequencies(arr) {
	let out = {};
	for (let el of arr) {
		if (out[el]) out[el] += 1;
		else out[el] = 1;
	}
	return out;
}

---

function getFrequencies(arr) {
	return arr.reduce((obj, v) => {
		obj[v] = (obj[v] || 0) + 1
		return obj
	}, {})
}

---

function getFrequencies(arr) {
	let obj = {};
	arr.map((item, index) => {
		if (arr.indexOf(item) != index) {
			obj[item]++
		} else {
			obj[item] = 1;
		}
	})
	return obj;
}

---

function getFrequencies(arr) {
  var r = {};
  if (typeof arr[0] != 'boolean') arr = arr.sort();
  for (var i in arr) {
    if (!r[arr[i]]) r[arr[i]] = 1;
    else r[arr[i]]++;
  }
  return r;
}