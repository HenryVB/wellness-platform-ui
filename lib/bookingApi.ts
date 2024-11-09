// lib/bookingApi.ts

export async function createBooking() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    success: true,
    bookingId: Math.random().toString(36).substr(2, 9)
  };
}

export const BOOKING_TERMS = [
  "Por favor llega 30 minutos antes de tu sesión",
  "Las sesiones virtuales requieren una conexión estable a internet",
  "Las cancelaciones deben realizarse con al menos 24 horas de anticipación",
  "No está permitido grabar las sesiones",
  "El pago debe completarse antes de la sesión",
  "Mantén tu cámara encendida durante toda la sesión virtual",
  "Asegúrate de estar en un espacio tranquilo y privado"
];

export const DEFAULT_SESSION_TYPES = [
  {
    id: 'trial',
    name: 'Sesión de Prueba',
    description: 'Una sesión inicial para conocer al especialista y su metodología',
    duration: 30,
    price: 0
  },
  {
    id: 'regular',
    name: 'Sesión Regular',
    description: 'Sesión completa personalizada según tus necesidades',
    duration: 60,
    price: null // Se establecerá según el precio del especialista
  }
];