const form = document.querySelector('#form1');
const idInput = document.querySelector('#form1 > div > input[name="userId"]');
const domainInput = document.querySelector('#form1 > div > input[name="userEmailDomain"]');
const selectBox = document.querySelector('#form1 > select');
const titleInput = document.querySelector('#form1 > input[name="title"]');

selectBox.addEventListener('change', e=>{
  const {selectedIndex, value} = e.target;
  selectedIndex === 0
  ?
    (()=>{
      domainInput.value='';
      domainInput.focus();
    })() 
  : (()=>{
      domainInput.value=value;
      if(idInput.value.replace(/(\s*)/g,'') !== ''){
        titleInput.focus();
        return;
      }
      idInput.focus();
    })();
});

const form1Submit = ()=>{
  if(idInput.value.replace(/(\s*)/g,'') === ''){
    alert('아이디를 입력하세오')
    idInput.focus();
    return false;
  }
  if(domainInput.value.replace(/(\s*)/g,'') === ''){
    alert('이메일 주소를 입력하세오')
    domainInput.focus();
    return false;
  }
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.value = idInput.value + '@' + domainInput.value;
  emailInput.name = 'userDomain';
  emailInput.hidden = true;
  form.appendChild(emailInput);
  return true;
}