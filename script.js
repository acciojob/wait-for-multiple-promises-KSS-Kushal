//your JS code here. If required.
const outputHTML = document.getElementById('output');
const first = () => {
	return new Promise((resolve, reject)=>{
		const time = Math.floor(Math.random()*3)+1;
		setTimeout(()=>{
			resolve(time);
		}, time*1000);
	})
}

const sec = () => {
	return new Promise((resolve, reject)=>{
		const time = Math.floor(Math.random()*3)+1;
		setTimeout(()=>{
			resolve(time);
		}, time*1000);
	})
}

const third = () => {
	return new Promise((resolve, reject)=>{
		const time = Math.floor(Math.random()*3)+1;
		setTimeout(()=>{
			resolve(time);
		}, time*1000);
	})
}

outputHTML.innerHTML = `
	<tr id="loading">
	<td colspan ="2">Loading...</td>
	</tr>
`
const currt = new Date();
Promise.all([first(), sec(), third()]).then((data)=>{
	outputHTML.innerHTML = '';
	const nowt = new Date();
	data.forEach((v, i)=>{
		outputHTML.innerHTML += `
		<tr>
		<td>Promise ${i+1}</td>
		<td>${v}</td>
		</tr>
		`
	})
	outputHTML.innerHTML += `
		<tr>
		<td>Total</td>
		<td>${(nowt-currt)/1000}</td>
		</tr>
		`
})