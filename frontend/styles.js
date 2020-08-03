const styles = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
}

header {
    width: 100%;
    height: 50px;
    background-color: #99badd;
    color: white;
    text-align: center;
}

header p {
    font-size: 18px;
}

.card {
    width: 300px;
    height: auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    background-color: white;
    color: black;
    margin: 10px;
    -webkit-box-shadow: 0 0 5px gray;
            box-shadow: 0 0 5px gray;
    padding: 10px;
}

.card .card-header {
    width: 100%;
    color: black;
    text-align: center;
}

.card .card-body {
    width: 100%;
    color: black;
    padding: 3px;
    text-align: left;
}
`

module.exports = styles