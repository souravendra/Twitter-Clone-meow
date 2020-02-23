console.log("Hello World");

const form =  document.querySelector('form');

form.addEventListener('submit', (event)=> {
    event.preventDefault(); //prevents auto-reload
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const mew = {
        name,
        content
    };  
    console.log(mew);
});