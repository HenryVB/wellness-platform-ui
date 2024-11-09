// components/learning/ResourceCard.tsx
import { LearningResource } from '@/types/learning';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function ResourceCard({ resource }: { resource: LearningResource }) {
  const renderContent = () => {
    const commonContent = (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="capitalize bg-pink-50 text-pink-600 border-pink-200">
            {resource.dimension}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
      </div>
    );

    switch (resource.type) {
      case 'workshop':
        return (
          <>
            {commonContent}
            <div className="text-sm text-gray-600 space-y-2">
              <p>Modalidad: {resource.modality}</p>
              <p>Fecha: {resource.datetime.toLocaleDateString()}</p>
              <p>Ponente: {resource.speaker.name}</p>
              <p className="text-gray-500 italic">{resource.speaker.bio}</p>
            </div>
          </>
        );

      case 'tool':
        return (
          <>
            {commonContent}
            <div className="text-sm text-gray-600 space-y-2">
              <p>Tipo: {resource.toolType}</p>
              <p>{resource.description}</p>
            </div>
          </>
        );

      case 'video':
        return (
          <>
            {commonContent}
            <div className="text-sm text-gray-600 space-y-2">
              <p>Duración: {resource.duration} minutos</p>
              <p>Ponente: {resource.speaker.name}</p>
              <p className="text-gray-500 italic">{resource.speaker.bio}</p>
            </div>
          </>
        );
    }
  };

  return (
    <Card className="group h-full bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-all hover:border-pink-200 hover:-translate-y-1">
      <CardHeader>
        <Image
          src={resource.image}
          alt={resource.title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-48 shadow-md group-hover:shadow-lg transition-all"
        />
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white transition-all hover:shadow-md">
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  );
}