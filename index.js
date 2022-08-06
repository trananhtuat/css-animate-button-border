document.querySelectorAll('.btn-animate').forEach(btn => {
  const txt = btn.textContent
  btn.textContent = ''

  const span = document.createElement('span')
  const span2 = document.createElement('span')
  const span3 = document.createElement('span')
  const span4 = document.createElement('span')

  btn.appendChild(span)
  btn.appendChild(span2)
  btn.appendChild(span3)

  span4.textContent = txt
  btn.appendChild(span4)
})