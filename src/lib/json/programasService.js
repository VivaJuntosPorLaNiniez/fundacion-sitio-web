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
      programasparticipantes ( cantidad, tipoparticipante ( tipo ) )
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};