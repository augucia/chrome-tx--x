document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('image');
    const text = document.getElementById('text');
    const convert = document.getElementById('convert');
    const results = document.getElementById('results');
    const apiKey = "EBvUVI8il5WAtbj4XpqigSsilbKqDx6MEw9Dxdv4";
    const apiUrl = "https://api.api-ninjas.com/v1/imagetotext";

    convert.addEventListener('click', () => {
        const selectedImage = imageInput.value;
        const url = apiUrl + selectedImage;

        fetch(url, {
            headers: {
                'x-API-KEY': apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                const textResult = data.text;
                const result = selectedimage * textResult;
                results.innerHTML = `${result.toFixed(2)}`;
            })
            .catch(error => {
                console.error('Error:', error);
                results.innerHTML = 'An error occurred, please try again later';
            });
    });
});
