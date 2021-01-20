export default class DownloadFile {
   constructor(triggers) {
      this.btns = document.querySelectorAll(triggers);
      this.path = 'assets/img/mainbg.jpg';
   }

   downloadItem(path) {
      const link = document.createElement('a');

      link.setAttribute('href', path);
      link.setAttribute('download', 'document.pdf');

      link.style.display = 'none';
      document.body.appendChild(link);

      link.click(function (e) {
         e.preventDefault();
      });
      // link.click((e) => {
      //    e.preventDefault();
      //    e.stopPropagation();
      //    e.stopImmediatePropagation();
      // });
      document.body.removeChild(link);
   }

   init() {
      this.btns.forEach(btn => {
         btn.addEventListener('click', () => {
            this.downloadItem(this.path);
         });
      });
   }
}