'use client';

import { useEffect, useState } from 'react';
import { getProgramasCompletos } from '../lib/json/programasService';
import { useAppStatus } from '@/context/AppContext';

export function useProgramas() {
    const [programas, setProgramas] = useState([]);
    const [error, setError] = useState(null);
    const { setDbLoading, setDbError } = useAppStatus();

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                setError(null);
                setDbLoading(true);
                setDbError(null);

                const data = await getProgramasCompletos();
                setProgramas(data);
            } catch (err) {
                const message = err.message || 'Error al conectar con la base de datos';
                setError(message);
                setDbError(message);
            } finally {
                setDbLoading(false);
            }
        };

        cargarDatos();
    }, [setDbLoading, setDbError]);

    return { programas, error };
}