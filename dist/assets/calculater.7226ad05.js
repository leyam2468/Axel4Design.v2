import './dynamic-import-polyfill.b3685604.js';
var main =
	'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #121212;\n  font-family: "Open Sans", "Helvetica Neue", sans-serif;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbody::-webkit-scrollbar {\n  width: 0.25rem;\n}\nbody::-webkit-scrollbar-track {\n  background: #1e1e24;\n}\nbody::-webkit-scrollbar-thumb {\n  background: #d63031;\n}\n\na {\n  text-decoration: none;\n}\n\n.calculater {\n  width: 350px;\n  height: 520px;\n  background-color: white;\n  border-radius: 3px;\n  box-shadow: 1px 1px 5px red;\n}\n.calculater .results {\n  height: 120px;\n}\n.calculater .results .history {\n  color: #919191;\n  font-size: 15px;\n  text-align: right;\n  padding: 20px;\n  height: 20px;\n}\n.calculater .results .output {\n  padding: 20px;\n  text-align: right;\n  font-size: 30px;\n  font-weight: 400;\n}\n.calculater .key {\n  height: 400px;\n  width: 100%;\n  display: inline-grid;\n  grid-template-columns: auto auto auto auto;\n}\n.calculater .key .oparator,\n.calculater .key .number,\n.calculater .key .empty {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: auto;\n  border: 0;\n  font-weight: bold;\n  font-size: 1.2rem;\n  outline: none;\n  cursor: pointer;\n  transition: 200ms;\n}\n.calculater .key .oparator:active,\n.calculater .key .number:active,\n.calculater .key .empty:active {\n  font-size: 1rem;\n}\n.calculater .key .oparator:hover,\n.calculater .key .number:hover,\n.calculater .key .empty:hover {\n  transform: scale(1.1);\n}\n.calculater .key .number,\n.calculater .key .empty {\n  background-color: white;\n}\n.calculater .key .oparator {\n  color: white;\n  font-size: 1.25rem;\n  background-color: gray;\n}\n.calculater .key .oparator:nth-child(4) {\n  background-color: darkred;\n}\n.calculater .key .oparator:nth-child(8) {\n  background-color: darkgreen;\n}\n.calculater .key .oparator:nth-child(12) {\n  background-color: darkblue;\n}\n.calculater .key .oparator:nth-child(16) {\n  background-color: darkmagenta;\n}\n.calculater .key .oparator:nth-child(20) {\n  background-color: black;\n}';
(getHistory = () => document.querySelector('.history-v').innerText),
	(printHistory = (t) => {
		document.querySelector('.history-v').innerText = t;
	}),
	(getOutput = () => document.querySelector('.output-v').innerText),
	(printOutPut = (t) => {
		document.querySelector('.output-v').innerText =
			'' == t ? t : getFormattedNumber(t);
	}),
	(getFormattedNumber = (t) => {
		if ('-' == t) return '';
		return Number(t).toLocaleString('en');
	}),
	(reverseNumberFromating = (t) => Number(t.replace(/,/g, ''))),
	(oparator = document.querySelectorAll('.oparator')),
	oparator.forEach((oparate) => {
		oparate.addEventListener('click', function () {
			if ('clear' == this.id) printHistory(''), printOutPut('');
			else if ('backspace' == this.id) {
				let t = reverseNumberFromating(getOutput()).toString();
				t && ((t = t.substr(0, t.length - 1)), printOutPut(t));
			} else {
				let output = getOutput(),
					history = getHistory();
				if (
					('' == output &&
						'' != history &&
						isNaN(history[history.length - 1]) &&
						(history = history.substr(0, history.length - 1)),
					'' != output || '' != history)
				)
					if (
						((output =
							'' == output
								? output
								: reverseNumberFromating(output)),
						(history += output),
						'=' == this.id)
					) {
						let result = eval(history);
						printOutPut(result), printHistory('');
					} else
						(history += this.id),
							printHistory(history),
							printOutPut('');
			}
		});
	}),
	(numbers = document.querySelectorAll('.number')),
	numbers.forEach((t) => {
		t.addEventListener('click', function () {
			let t = reverseNumberFromating(getOutput());
			console.log(reverseNumberFromating(this.id)),
				NaN != t && ((t += this.id), printOutPut(t));
		});
	});
