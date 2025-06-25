// components/test/Roadmap.tsx
import { useTest } from '@/contexts/TestContext';
import { WellnessDimension } from '@/types/test';
import { ArrowLeft, Mail, Download, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dimensionColors: Record<WellnessDimension, { bg: string; text: string; icon: string }> = {
  physical: { bg: 'bg-green-50', text: 'text-green-600', icon: 'border-green-200' },
  mental: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'border-purple-200' },
  emotional: { bg: 'bg-yellow-50', text: 'text-yellow-600', icon: 'border-yellow-200' },
  spiritual: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'border-blue-200' },
  financial: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'border-orange-200' }
};

export function Roadmap() {
  const router = useRouter();
  const { state } = useTest();
  const result = state.result;
  const [emailSent, setEmailSent] = useState(false);

  // Función para simular envío de correo
  const handleEmailShare = async () => {
    setEmailSent(true);
    toast.success("¡Resultados enviados a tu correo electrónico!", {
      position: "bottom-center",
      autoClose: 3000
    });
    
    // Simular tiempo de proceso
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  };



  // Función para simular descarga del PDF
  const handleDownload = () => {
    toast.success("Descargando resultados en PDF...", {
      position: "bottom-center",
      autoClose: 3000
    });
    
    // En una implementación real, aquí se generaría y descargaría el PDF
    setTimeout(() => {
      toast.info("PDF descargado correctamente", {
        position: "bottom-center"
      });
    }, 2000);
  };

  if (!result) return null;

  return (
    <div className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          ¡Estamos listos para guiarte en el viaje de volver a ti conectando cuerpo, mente y alma!
        </h2>
        <p className="text-gray-600">Basado en tus respuestas, te propones esta ruta del bienestar</p>
      </div>

      {/* Dimensions Tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {result.dimensions.map((dimension) => (
          <span key={dimension}
            className={`px-4 py-2 rounded-full text-sm font-medium ${dimensionColors[dimension].bg} 
            ${dimensionColors[dimension].text} shadow-sm`}>
            {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:w-0.5 
        before:bg-gradient-to-b before:from-orange-100 before:via-orange-300 before:to-orange-100">
        {result.roadmap.map((step, index) => (
          <div key={index} className="relative pl-14">
            <div className={`absolute left-0 p-3 rounded-full ${dimensionColors[step.dimension].bg} 
              shadow-md border-2 ${dimensionColors[step.dimension].icon}`}>
              {index + 1}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.actionItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Share Results Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-orange-600">Comparte tus resultados</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button 
            onClick={handleEmailShare}
            disabled={emailSent}
            variant="outline"
            className="flex items-center gap-2 bg-white border-orange-300 hover:bg-orange-50 text-gray-700"
          >
            {emailSent ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Enviado</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 text-orange-500" />
                <span>Enviar a mi correo</span>
              </>
            )}
          </Button>
          

          <Button 
            onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2 bg-white border-orange-300 hover:bg-orange-50 text-gray-700"
          >
            <Download className="h-4 w-4 text-orange-500" />
            <span>Descargar PDF</span>
          </Button>
         
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center pt-8">
        <Button 
          onClick={() => router.push('/')}
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full 
            transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Volver al Inicio
          <ArrowLeft className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Toast container for notifications */}
      <ToastContainer position="bottom-center" theme="colored" />
    </div>
  );
}