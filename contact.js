const btn = document.getElementById('button');

document.getElementById('conatctform')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_yo8zywq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('YOUR MASSEGE SENT SUCCESSFULLY !');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});