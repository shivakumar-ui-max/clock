const hour = document.getElementById("hour");
const minute = document.getElementById('minute');
const sec = document.getElementById('second');
const amOrpm = document.getElementById('amOrpm')

setInterval(() => {
              let date = new Date();
              sec.innerText = date.getSeconds();
              minute.innerText = date.getMinutes();
              if (date.getHours() > 12) {
                            hour.innerText = date.getHours() - 12;
                            amOrpm.innerText = 'PM';

              } else {
                            hour.innerText = date.getHours();
                            amOrpm.innerText = 'AM';

              }
}, 1000);
