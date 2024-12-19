document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    console.log('Form Data:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);

});
