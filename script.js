function add()
{
    var text = document.getElementById('search').value
    var val = document.getElementById('text')
    var div = document.createElement('div')
    var li = document.createElement('li')
    li.innerHTML=text
    var btn = document.createElement('i')
    btn.classList.add('far')
    btn.classList.add('fa-trash-alt')
    div.appendChild(li)
    div.appendChild(btn)
    val.appendChild(div)
    document.getElementById('search').value=''
}

var del = document.getElementById('text')
del.addEventListener('click',remove)

function remove(e)
{
    const element = e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}
