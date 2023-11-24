import React, {useEffect} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs from 'dayjs';

export default function BasicDateRangeCalendar({ availableDates }) {
  console.log("BASIC ")
  console.log(availableDates)
  //transform to array 
  // from array to dayjs objects
  const availableDatesDayjs = availableDates.map(date => dayjs(date));


  useEffect(() => {
  const divs = document.querySelectorAll('div');
    divs.forEach(div => {
      if (div.textContent === 'MUI X Missing license key') {
        div.style.display = 'none';
      }
    });
  }, []); // El arreglo vacío asegura que esto se ejecute solo una vez después del montaje del componente


  const [value, setValue] = React.useState([null, null]);

  // Función para verificar si una fecha debe ser deshabilitada
  const shouldDisableDate = (date) => {
    return !availableDatesDayjs.some(availableDate => 
      availableDate.isSame(date, 'day')
    );
  };

  // Función para manejar el cambio de rango de fechas
  const handleChange = (newValue) => {
    if (newValue[0] && newValue[1]) {
      let isRangeValid = true;
      let day = newValue[0];

      while (day.isBefore(newValue[1], 'day') || day.isSame(newValue[1], 'day')) {
        if (shouldDisableDate(day)) {
          isRangeValid = false;
          break;
        }
        day = day.add(1, 'day');
      }

      if (isRangeValid) {
        setValue(newValue);
      } else {
        // Opcional: Mostrar un mensaje al usuario indicando que el rango no es válido
      }
    } else {
      // Si solo se ha seleccionado una fecha, la establecemos
      setValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar 
          value={value} 
          onChange={handleChange}
          shouldDisableDate={shouldDisableDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
