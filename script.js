let insert = document.getElementById('insert')

document.addEventListener('keydown',(event)=> {
    console.log(event.keyCode)
    insert.innerHTML = `
    <small class="small">Event.key</small>
    <br>
    <div class="key">
    ${event.key} 
    </div>
    <br>
    <small class="small">Event.keyCode</small>
    <br>
    <div class="key">
    ${event.keyCode} 
    </div>
    <br>
     <small class="small">Event.code</small>
     <br>
    <div class="key">
    ${event.code} 
    </div>`
});