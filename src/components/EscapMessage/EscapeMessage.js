import './EscapeMessage.css';

export const GetEscapeMessage = (score) => {
  if (score <= 1) {
    return 'No han logrado escapar. El Conde y Sofía deberán seguir esperando, entre los pasillos interminables del Metropol, una nueva oportunidad para ser libres.';
  } else if (score <= 3) {
    return 'Sofía encontró el camino. El Conde lo sabía: solo uno debía escapar. Su esperanza viaja con ella, más allá de los muros del Metropol.';
  } else {
    return 'Han cruzado juntos la última puerta. El Metropol ya no los retiene. Por fin, el Conde y Sofía son dueños de su destino.';
  }
};
