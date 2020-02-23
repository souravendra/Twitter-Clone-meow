console.log("Hello World");

const form =  document.querySelector('form'); //grabs an element on the page
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews');
const API_URL = 'http://localhost:5000/mews';

loadingElement.style.display = '';

listAllMews();

form.addEventListener('submit', (event)=> {
    event.preventDefault(); //prevents auto-reload
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');
    
    //grabbing form data and putting it into an object then sending it to the back-end
    const mew = {
        name,
        content
    };  

    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
        }
    })  .then(response => response.json())
        .then(createdMew => {
            console.log(createdMew);
            form.reset();
            form.style.display = '';
            loadingElement.style.display = 'none';
        });
});

function listAllMews(){
    fetch(API_URL)
        .then(response => response.json())
        .then(mews => {
            console.log(mews);
            mews.forEach(mew => {
                const div = document.createElement('div');

                const header = document.createElement('h3');
                header.textContent = mew.name;

                const contents = document.createElement('p');
                contents.textContent = mew.content;
            });
        });
}