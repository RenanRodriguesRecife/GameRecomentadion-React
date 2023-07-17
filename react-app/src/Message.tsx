

function Message(){
    const name = 'test';
    
    if (name)
      return<h1>Hello {name}</h1>
    return <h1>Hello World</h1>
    //Esse código debaixo do capô é compilado para javascript
    //babeljs.io/repl
}

export default Message;