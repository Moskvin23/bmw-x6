const server = 'https://jsonplaceholder.typicode.com/posts';

//Now I'm going to writing function for request to server's
// method POST - because I send data
// method send accept my data

const sendData = (data, callback,falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);
    
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState !== 4) return;
        if(request.status === 200 || request.status === 201){
            const response = JSON.parse(request.responseText);
            callback(response.id);
        } else {
            falseCallBack(request.status)
            throw new Error(request.status)
        }
    });

    request.send(data)
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const data = {};

        for(const {name,value} of form.elements) {
            if (name){
                data[name] = value
            }
        }
        sendData(JSON.stringify(data),
        (id) => {
            alert('Ошибка')
        },
        (err) => {
            alert('Ведите данные заново...')
        });
    })
};

formElems.forEach(formHandler);


