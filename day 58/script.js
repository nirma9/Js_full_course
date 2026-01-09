const API_KEY = "my-secret-key";

fetch('https://example.com/data?kay = ${API_KEY}')
.then(res => res.json())