const hashPlusCount = str => [
  (str.match(/#/g) || []).length,
  (str.match(/\+/g) || []).length,
];

---

function hashPlusCount(str) {
	return [str.split('+').join('').length, str.split('#').join('').length]
}

---

function hashPlusCount(str) {
	return [str.split("").filter(x=>x=="#").length,str.split("").filter(x=>x=="+").length];
}

---

function hashPlusCount(str) {
	const arr = str.split('')
	const hash = arr.filter(el=> el==='#').length
	const plus = arr.filter(el=> el === '+').length
	return [hash, plus]
}