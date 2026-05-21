'use client';

import React from 'react';

export default function ErrorData({ mensaje, AlDarClicReintentar }) {
  return (
    <div className="max-w-xl mx-auto my-12 p-6 bg-red-50 border border-red-100 text-center rounded-2xl shadow-sm animate-fadeIn">
      {/* Icono de Alerta */}
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
        <svg 
          className="h-6 w-6 text-red-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>

      {/* Textos */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        ¡Ups! Algo salió mal al cargar los datos
      </h2>
      <p className="text-sm text-red-600 mb-6">
        {mensaje || 'No se pudo conectar con el ecosistema de la fundación. Por favor, verifica tu conexión.'}
      </p>

      {/* Botón de Acción */}
      <button 
        onClick={AlDarClicReintentar || (() => window.location.reload())} 
        className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors shadow-sm"
      >
        <svg 
          className="mr-2 h-4 w-4 text-red-100 animate-spin-slow" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
        </svg>
        Intentar de nuevo
      </button>
    </div>
  );
}