const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add("active");
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove("active");
  })
}

const URL_API = "https://api.telegram.org/bot6255083605:AAGaoVDglyKxbpIZobyIDmj_OB_MNdceIgo/sendMessage";
const CHAT_ID = "-876807968";
const phone = document.querySelector('input[name=phone]')
const phoneForm = document.querySelector('input[name=phoneForm]')
const name = document.querySelector('input[name=name]')
const telegram = document.querySelector('input[name=telegram]')
const messageS = document.querySelector('input[name=messageS]')


document.getElementById('newsletter').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заявка из сайта</b>\n`;
  message += `<b>Телефон номер 📱: </b> ${this.phone.value} \n`;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
    .then((res) => {
      this.phone.value = "";
      success();
    })
    .catch((err) => {
      console.warn(err);
      emptyerror();
    })
    .finally(() => {
      console.log('Конец')
    })
})

function emptyerror() {
  swal({
    title: "Оо нет ",
    text: "Кажется не заполнили все поля",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Сообщение успешно отправлено",
    text: "С вами свяжуться в течении 24часа",
    icon: "success",
  });
}




