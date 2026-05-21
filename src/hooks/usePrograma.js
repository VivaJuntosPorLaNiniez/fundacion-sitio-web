'use client';

import { useState, useEffect } from 'react';
import { getProgramaCompletoById } from '../lib/json/programasService';
import { useAppStatus } from '@/context/AppContext';

export function usePrograma(idPrograma) {
    const [proyecto, setProyecto] = useState(null); // Estado para almacenar los datos del programa
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setDbLoading, setDbError } = useAppStatus(); // Usamos el contexto para manejar el estado global de carga y error

    useEffect(() => {
        // Si no se proporciona un ID, no intentamos cargar datos
        if (!idPrograma) {
            setLoading(false);
            setDbLoading(false);
        return;
        }

        // Función para cargar los datos del programa
        const cargarDatos = async () => {
        try {
            setLoading(true);
            setError(null);
            setDbLoading(true);
            setDbError(null);
            
            // Llamamos a la función del servicio para obtener los datos del programa por su ID
            const data = await getProgramaCompletoById(idPrograma);
            setProyecto(data);
        } catch (err) {
            const message = err.message || 'Error al conectar con la base de datos';
            setError(message);
            setDbError(message);
        } finally {
            setLoading(false);
            setDbLoading(false);
        }
        };

        cargarDatos();

    }, [idPrograma, setDbLoading, setDbError]); 

    return { proyecto, loading, error };
}