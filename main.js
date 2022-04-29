// function to clear form
const alertDiv = document.getElementById(`alertDiv`);

function displayAlert() {
	let clearForm = document.getElementById(`clearForm`);
	clearForm.addEventListener('click', () => {
		alertDiv.style.display = `flex`;
	});
}

displayAlert();

function hideAlert() {
	alertDiv.style.display = `none`;
}

// function on pressing cancel btn

function onCancel() {
	let cancelBtn = document.getElementById(`cancelBtn`);
	cancelBtn.addEventListener('click', () => hideAlert());
}

onCancel();

// function on pressing clear btn

function onClear() {
	let clearBtn = document.getElementById(`clearBtn`);
	clearBtn.addEventListener('click', () => {
		let googleForm = document.getElementById(`googleForm`);
		googleForm.reset();
		hideAlert();
	});
}

onClear();
