export default class Difference {
   constructor(oldOfficer, newOfficer, items) {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      // this.items = items;
      this.oldCounter = 0;
      this.newCounter = 0;

   }

   bindTriggrers(container, items, counter) {
      container.querySelector('.card__click').addEventListener('click', () => {
         if (counter != items.length - 2) {
            items[counter].style.display = 'flex';
            items[counter].classList.add('flipInX');
            counter++;
         } else {
            items[counter].style.display = 'flex';
            items[items.length - 1].style.display = 'none';
            // items[items.length - 1].remove();
            items[counter].classList.add('flipInX');
         }
      });
   }

   hideItems(items) {
      items.forEach((item, i, arr) => {
         item.classList.add('animated');
         if (i != arr.length - 1) {
            item.style.display = 'none';
         }
      });
   }

   init() {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggrers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggrers(this.newOfficer, this.newItems, this.newCounter);
   }
}