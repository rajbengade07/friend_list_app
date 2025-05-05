let names=[];
function compute()
{
	event.preventDefault();
	let action=document.activeElement.value;
	let msg=document.getElementById("msg");
	
	if(action==="Add")
	{
		let n=prompt("Enter the name of your friend");
		if(n!=="")
		{
			names.push(n);
			msg.innerHTML = names.join(", ");
		}
	}
	else if(action==="Remove")
	{
		let n=prompt("Enter the name of your friend");
		if(n!=="")
		{
			let pos=names.indexOf(n);
			if(pos === -1)
			{
				alert("Name is not found");
			}
			else
			{
				names.splice(pos,1);
				alert(`${n} is Removed `);
				msg.innerHTML = names.join(", ");
			}
		}		
	}
	else if(action==="Show")
	{
		msg.innerHTML = `<strong>Total Friends:</strong> ${names.length}<br><ul>${names.map(n => `<li>${n}</li>`).join("")}</ul>`;

	}
}