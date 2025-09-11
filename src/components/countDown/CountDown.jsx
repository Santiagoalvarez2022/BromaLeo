import { useState, useEffect } from 'react';
import "./CountDown.css";

const CountDown = () => {
    // La fecha objetivo para la cuenta regresiva
    const targetDate = new Date('2025-11-28T11:00:00Z').getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        // Función para calcular el tiempo restante
        const calculateTimeLeft = () => {
          const now = new Date().getTime();
          const distance = targetDate - now;
          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            setTimeLeft({ days, hours, minutes });
          } else {
            // Cuando la cuenta regresiva termina, los valores se establecen en cero
            setTimeLeft({ days: 0, hours: 0, minutes: 0 });
          }
        };

        // Calcular el tiempo inicial y actualizar cada segundo
        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 1000);
        
        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
      }, [targetDate]);

    // Función de ayuda para formatear cualquier número a dos dígitos
    const formatNumber = (number) => {
        // Convierte el número a cadena y rellena con '0' si es de un solo dígito
        return String(number).padStart(2, '0');
    };

    return (
        <section className="countdownPage pt-8 pb-2">
            <div className="chorometer font-Inria font-light">
                <div className='container-count'>
                    <p className="count">{formatNumber(timeLeft.days)}</p>
                    <span className='label'>Dias</span>
                </div>
                <div className='container-count'>
                    <span className="count">{formatNumber(timeLeft.hours)}</span>
                    <span className='label'>Hrs</span>
                </div>
                <div className='container-count'>
                    <span className="count">{formatNumber(timeLeft.minutes)}</span>
                    <span className='label'>min</span>
                </div>
            </div>
        </section>
    );
}

export default CountDown;