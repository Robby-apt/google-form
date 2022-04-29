// function to clear form
const alertDiv = document.getElementById(`alert`);

function displayAlert() {
	const clearForm = document.getElementById(`clearForm`);
	clearForm.addEventListener('click', () => {
		alertDiv.style.display = `flex`;
	});
}

displayAlert();
