document.getElementById('source').addEventListener('submit', function (event) {
  event.preventDefault()

    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    const result = document.getElementById('target');
    result.textContent = `Your name is ${firstName} ${lastName}`;
});