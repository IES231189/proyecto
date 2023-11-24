import React from 'react';
import { useState } from 'react';
import Input from '../atomos/Input';
import Label from '../atomos/Label';
import Textarea from '../atomos/Textarea';

const FormHos=()=>{

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
        pesoKg: '',
        fechaIngreso: '',
        horaIngreso: '',
        fechaEgreso: '',
        horaEgreso: '',
        numeroCuarto: '',
        numeroCama: '',
        grupoSanguineo: '',
        escolaridad: '',
        alergico: 'No',
        observaciones: '',
        medicamentosRecetados: '',
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
        console.log('Datos del paciente en hospital:', formulario);
      };

         return(
         <form onSubmit={handleSubmit}>
        <div className='col-5'>

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
                    <div className='border'>
                        <h1>Informe de hospitalizacion</h1>
                    </div>

                <div>
                <Label htmlFor="fechaIngreso">Fecha de Ingreso:</Label>
                <Input type="date" id="fechaIngreso" name="fechaIngreso" value={formulario.fechaIngreso} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="horaIngreso">Hora de Ingreso:</Label>
                <Input type="time" id="horaIngreso" name="horaIngreso" value={formulario.horaIngreso} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="fechaEgreso">Fecha de Egreso:</Label>
                <Input type="date" id="fechaEgreso" name="fechaEgreso" value={formulario.fechaEgreso} onChange={handleChange} />
                </div>
                <div>
                <Label htmlFor="horaEgreso">Hora de Egreso:</Label>
                <Input type="time" id="horaEgreso" name="horaEgreso" value={formulario.horaEgreso} onChange={handleChange} />
                </div>
                <div>
                <Label htmlFor="numeroCuarto">Número de Cuarto:</Label>
                <Input type="number" id="numeroCuarto" name="numeroCuarto" value={formulario.numeroCuarto} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="numeroCama">Número de Cama:</Label>
                <Input type="number" id="numeroCama" name="numeroCama" value={formulario.numeroCama} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="grupoSanguineo">Grupo Sanguíneo:</Label>
                <Input type="text" id="grupoSanguineo" name="grupoSanguineo" value={formulario.grupoSanguineo} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="escolaridad">Escolaridad:</Label>
                <Input type="text" id="escolaridad" name="escolaridad" value={formulario.escolaridad} onChange={handleChange} />
                </div>
                <div>
                <Label htmlFor="alergico">Alergico:</Label>
                <select id="alergico"
                    name="alergico"
                    value={formulario.alergico}
                    onChange={handleChange}
                >
                    <option value="No">No</option>
                    <option value="Sí">Sí</option>
                </select>
                </div>
                <div>
                <Label htmlFor="observaciones">Observaciones:</Label>
                <Textarea id="observaciones" name="observaciones" value={formulario.observaciones} onChange={handleChange}/>
                </div>
                <div>
                <Label htmlFor="medicamentosRecetados">Medicamentos Recetados:</Label>
                <Textarea id="medicamentosRecetados" name="medicamentosRecetados" value={formulario.medicamentosRecetados} onChange={handleChange} />
                </div>
                <button type="submit" className='button-submit'>Guardar Datos Hospital</button>
         
      </div> 
      </form>
         );
}

export default FormHos;