## Shadow of the Colossos Nodejs API

</br>

Protótipo: https://sofcnodejsapi.herokuapp.com/

</br>

````````
const getInfo = async () => {
    const response = await fetch( "https://sofcnodejsapi.herokuapp.com/personagens/"
    );
    return response.json();
};

getInfo().then((data) => {
    console.log(data);
});
````````
