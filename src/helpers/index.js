import { useNavigate } from "react-router-dom";

// Funcion que formatea fechas
export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    return formattedDate;
};
export function formatTime(dateStr) {
    const date = new Date(dateStr);

    const formattedTime = date.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return formattedTime;
};