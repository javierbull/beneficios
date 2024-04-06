// CALENDAR
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendarInhouse');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día'
      },
      selectable: true,
      selectHelper: true,
      events: [
        {
          title: 'La molina',
          start: '2024-04-13T10:00:00',
          end: '2024-04-13T13:00:00'
        },
        {
          title: 'Lince',
          start: '2024-04-13T11:00:00',
          end: '2024-04-13T13:00:00'
        }
      ],
      select: function(){
        // alert("Clicked");
      }
		
    });
    calendar.render();
  });
  

  // END CALENDAR

 