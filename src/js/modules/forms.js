export default class Forms {
   constructor(formClass) {
      this.forms = document.querySelectorAll(formClass);

      this.message = {
         loading: 'Загрузка...',
         success: 'Спасибо, данные оправлены!',
         failure: 'Что-то пошло не так...'
      };
      this.path = 'assets.question.php';
   }

   // Функция отправки запроса
   async postData(url, data) {
      let res = await fetch(url, {
         method: "POST",
         body: data
      });
      return await res.text();
   }

   init() {
      this.forms.forEach(item => {
         item.addEventListener('submit', (e) => {
            e.prevenDefault();

            let statusMessage = document.createElement('div');
            statusMessage.style.cssText = `
                  margin-top: 15px;
                  text-align: center;
                  font-size: 18px;
                  color: grey;
               `;
            item.parentNode.appendChild(statusMessage);

            statusMessage.textContent = this.message.loading;

            const formData = new FormData(item);

            this.postData(this.path, formData)
               .then(res => {
                  console.log(res);
                  statusMessage.textContent = this.message.success;
               })
               .catch(() => {
                  statusMessage.textContent = this.message.failure;
               });
         });
      });
   }
}