const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
const res = document.getElementById('res')
const btn = document.getElementById('botao')

function embaralhar(){
const itens = [item1.value, item2.value,item3.value, item4.value]

 //Embaralha
  itens.sort((a, b) => 0.5 - Math.random())

  if(itens[0].length == 0 || itens[1].length == 0 || itens[2].length == 0 || itens[3].length == 0){
    res.innerText = "PREENCHA TODOS OS CAMPOS"
    res.style.color = '#bf0e0e'
    //Escreve "Resultado" em 3 segundos
    setTimeout(function() {
      res.innerText = 'Resultado';
      res.style.color = '#ffcd00'}, 3000);
  }
  else{
  res.innerText = itens.join(', ')
  res.style.color = '#00ff40'
  }
}
btn.addEventListener("click", embaralhar)


