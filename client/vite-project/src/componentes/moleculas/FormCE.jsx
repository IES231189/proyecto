import React from 'react';
import { useState } from 'react';
import Input from '../atomos/Input';
import Label from '../atomos/Label';
import Textarea from '../atomos/Textarea';

const FormCE=()=>{
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        sexo: '',
        edad: '',
        citaAgendada: '',
        telefono: '',
        horaProgramada: '',
        presionArterial: '',
        frecuenciaCardiaca: '',
        temperaturaCorporal: '',
        motivoConsulta: '',
        pesoKg: '',
        pesoFetalEstimado: '',
        frecuenciaCardiacaFetal: '',
        semanaGestacion: '',
        sexoFeto: '',
        medicamentosRecetados: '',
        observaciones: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
          ...formulario,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar o guardar los datos del paciente
        console.log('Datos del paciente:', formulario);
      };


    return(
        
             <form onSubmit={handleSubmit}>
            <div className='col-4'>
                <div className='border'><h1>Información general</h1> </div>
               
                <div>
                    <Label htmlFor="nombre">Nombre:</Label>
                    <Input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={handleChange} />
                </div>

                <div>
                <Label htmlFor="apellido">Apellido:</Label>
                <Input type="text" id="apellido" name="apellido" value={formulario.apellido} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="sexo">Sexo:</Label>
                <select id="sexo"  name="sexo" value={formulario.sexo} onChange={handleChange}>
                    <option value="">Seleccionar</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                </div>

                <div className='contenedor'>
                         <div className='box-container'>
                                <div>
                                <Label htmlFor="edad">Edad:</Label>
                                <Input type="number" id="edad"  name="edad"  value={formulario.edad} onChange={handleChange}  />
                                </div>
                                <div>
                                <Label htmlFor="citaAgendada">Cita Agendada:</Label>
                                <Input type="date" id="citaAgendada"  name="citaAgendada" value={formulario.citaAgendada} onChange={handleChange}  />
                                </div>
                         </div>
                       
                            <div className='box-container'>
                                    <div>
                                    <Label htmlFor="telefono">Teléfono:</Label>
                                    <Input  type="tel" id="telefono"  name="telefono" value={formulario.telefono} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <Label htmlFor="horaProgramada">Hora Programada:</Label>
                                    <Input type="time" id="horaProgramada" name="horaProgramada"  value={formulario.horaProgramada}  onChange={handleChange} />
                                    </div>
                            </div>     
                </div>

                <div className='border'><h1>Signos vitales</h1></div>

                <div>

                <Label htmlFor="presionArterial">Presión Arterial:</Label>
                <Input type="text" id="presionArterial" name="presionArterial" value={formulario.presionArterial} onChange={handleChange} />
                </div>
                <div>
                <Label htmlFor="frecuenciaCardiaca">Frecuencia Cardíaca:</Label>
                <Input type="text" id="frecuenciaCardiaca" name="frecuenciaCardiaca" value={formulario.frecuenciaCardiaca} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="temperaturaCorporal">Temperatura Corporal:</Label>
                <Input type="text" id="temperaturaCorporal" name="temperaturaCorporal" value={formulario.temperaturaCorporal} onChange={handleChange} />
                </div>
                
                <div>
                <Label htmlFor="pesoKg">Peso en kg:</Label>
                <Input type="number" id="pesoKg" name="pesoKg" value={formulario.pesoKg} onChange={handleChange} />
                </div>   
             </div>       

                <div className='col-4'>      

                         <div className='border'> <h1>Datos Fetales</h1></div>   
                       
                <div>
                    <Label htmlFor="pesoFetalEstimado">Peso Fetal Estimado:</Label>
                    <Input type="text" id="pesoFetalEstimado" name="pesoFetalEstimado" value={formulario.pesoFetalEstimado} onChange={handleChange}/>
                </div>
                <div>
                    <Label htmlFor="frecuenciaCardiacaFetal">Frecuencia Cardiaca Fetal:</Label>
                    <Input type="text" id="frecuenciaCardiacaFetal" name="frecuenciaCardiacaFetal" value={formulario.frecuenciaCardiacaFetal} onChange={handleChange}/>
                </div>
                <div>
                    <Label htmlFor="semanaGestacion">Semana de Gestación:</Label>
                    <Input type="text" id="semanaGestacion" name="semanaGestacion" value={formulario.semanaGestacion} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="sexoFeto">Sexo Biológico del Feto:</Label>
                    <Input type="text" id="sexoFeto" name="sexoFeto" value={formulario.sexoFeto} onChange={handleChange}
                    />
                </div>

                <div>
                    <Label htmlFor="medicamentosRecetados">Medicamentos Recetados:</Label>
                    <Textarea id="medicamentosRecetados" name="medicamentosRecetados" value={formulario.medicamentosRecetados} onChange={handleChange}/>
                </div>
                <div>
                    <Label htmlFor="observaciones">Observaciones:</Label>
                    <Textarea id="observaciones" name="observaciones" value={formulario.observaciones} onChange={handleChange}
                    />
                </div>

                <button type="submit" className='button-submit'>Guardar Paciente</button>
                
            </div>
         </form>
      
    );
}

export default FormCE;