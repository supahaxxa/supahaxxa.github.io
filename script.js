document.addEventListener('DOMContentLoaded', () => {
	const output = document.getElementById('output');

	const lines = [
		'hey, i am <strong>supahaxxa</strong>',
		'',
		'i am a business student.',
		'i love building things with code.',
		'',
		'you can find me on:',
		'  - <a href="https://github.com/supahaxxa" target="_blank">[github]</a>',
		'  - <a href="https://www.linkedin.com/in/fmshajib" target="_blank">[linkedin]</a>',
		'  - <a href="mailto:supahaxxa@gmail.com">[email]</a>',
		'',
		'have a nice day :)'
	];

	const typingSpeed = 25;
	const lineDelay = 200;

	let lineIndex = 0;
	let charIndex = 0;

	const cursor = document.createElement('span');
	cursor.className = 'cursor';
	output.appendChild(cursor);

	function type() {
		if (lineIndex >= lines.length) {
			return;
		}

		const currentLine = lines[lineIndex];

		if (charIndex < currentLine.length) {
			const char = currentLine.charAt(charIndex);

			if (char === '<') {
				const tagEndIndex = currentLine.lastIndexOf('>');
				
				if (tagEndIndex !== -1) {
					const tag = currentLine.substring(charIndex, tagEndIndex + 1);
					cursor.insertAdjacentHTML('beforebegin', tag);
					charIndex = tagEndIndex + 1;
				}
			} else {
				cursor.insertAdjacentText('beforebegin', char);
				charIndex++;
			}
			setTimeout(type, typingSpeed);
			
		} else {
			lineIndex++;
			charIndex = 0;
			cursor.insertAdjacentHTML('beforebegin', '\n');
			setTimeout(type, lineDelay);
		}
	}

	type();
});
