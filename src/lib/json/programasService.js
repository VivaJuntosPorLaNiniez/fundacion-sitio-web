import { supabase } from '../supabase'; 

export const getProgramaCompletoById = async (id) => {
  
  const { data, error } = await supabase
    .from('programas')
    .select(`
      id,
      nombre,
      descripcion,
      objetivo,
      fechainicio,
      fechafin,
      terminado,
      objetivosespecificos ( id, descripcion ),
      programaslugares ( lugares ( departamento, municipio, distrito, lugaresp ) ),
      programasperfiles ( perfiles ( tipo ) ),
      programasparticipantes ( cantidad, tipoparticipante ( tipo ) ),
      img_portada
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const getProgramasCompletos = async () => {
  const { data, error } = await supabase
    .from('programas')
    .select(`
      id,
      nombre,
      descripcion,
      objetivo,
      fechainicio,
      fechafin,
      terminado,
      objetivosespecificos ( id, descripcion ),
      programaslugares ( lugares ( departamento, municipio, distrito, lugaresp ) ),
      programasperfiles ( perfiles ( tipo ) ),
      programasparticipantes ( cantidad, tipoparticipante ( tipo ) ),
      img_portada
    `)
    .order('id', { ascending: true });

  if (error) throw error;
  return data ?? [];
};