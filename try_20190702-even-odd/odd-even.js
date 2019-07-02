function isEvenOrOdd(num) {
	let k="even"
	let l="odd"
	if (num % 2 === 0) {
		  return k;
			 }
	 else{
		  return l;
	 }
}

---

function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}