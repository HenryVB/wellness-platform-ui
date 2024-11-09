// components/learning/LearningSection.tsx
'use client'

import { useState, useEffect } from 'react';
import { ResourceCard } from './ResourceCard';
import { Button } from '@/components/ui/button';
import { fetchResources } from '@/lib/learning';
import { LearningResource, ResourceCategory, WellnessDimension } from '@/types/learning';

export function LearningSection() {
  const [category, setCategory] = useState<ResourceCategory>('tool');
  const [dimension, setDimension] = useState<WellnessDimension | ''>('');
  const [resources, setResources] = useState<LearningResource[]>([]);
  const [loading, setLoading] = useState(false);
  const categories: ResourceCategory[] = ['workshop', 'tool', 'video'];
  const dimensions: WellnessDimension[] = [
    'physical', 'mental', 'emotional', 'spiritual', 'financial'
  ];
  useEffect(() => {
    async function loadResources() {
      setLoading(true);
      try {
        console.log('Loading resources for:', { category, dimension }); // Debug log
        const data = await fetchResources(
          category as ResourceCategory, // Ensure correct type
          dimension || undefined
        );
        console.log('Loaded resources:', data.length); // Debug log
        setResources(data);
      } catch (error) {
        console.error('Error loading resources:', error);
        setResources([]);
      } finally {
        setLoading(false);
      }
    }
    
    loadResources();
  }, [category, dimension]);

  const handleCategoryChange = (newCategory: ResourceCategory) => {
    console.log('Category changed to:', newCategory); // Debug log
    setCategory(newCategory);
  };

  const handleDimensionChange = (newDimension: WellnessDimension | '') => {
    setDimension(newDimension);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
          Recursos de Aprendizaje
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explora nuestros recursos diseñados para potenciar tu bienestar integral
        </p>
        
        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => handleCategoryChange(cat)}
              className={`capitalize px-6 py-2 rounded-full transition-all ${
                category === cat 
                  ? "bg-pink-600 hover:bg-pink-700 text-white" 
                  : "hover:border-pink-200"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Dimension Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={dimension === '' ? "default" : "outline"}
            onClick={() => handleDimensionChange('')}
            className={`rounded-full ${
              dimension === '' 
                ? "bg-pink-600 hover:bg-pink-700 text-white" 
                : "hover:border-pink-200"
            }`}
          >
            Todos
          </Button>
          {dimensions.map(dim => (
            <Button
              key={dim}
              variant={dimension === dim ? "default" : "outline"}
              onClick={() => handleDimensionChange(dim)}
              className={`capitalize rounded-full ${
                dimension === dim 
                  ? "bg-pink-600 hover:bg-pink-700 text-white" 
                  : "hover:border-pink-200"
              }`}
            >
              {dim}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"/>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}