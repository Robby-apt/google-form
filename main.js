// function to clear form
function clearForm() {
	const clearBtn = document.getElementById(`clearBtn`);
	clearBtn.addEventListener('click', () => {
		document.getElementById(`googleForm`).reset();
	});
}

clearForm();
