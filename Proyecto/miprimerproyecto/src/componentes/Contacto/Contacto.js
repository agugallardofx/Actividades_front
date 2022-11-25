import React from "react";
import "./Contacto.css";
import { useForm } from "react-hook-form";


const Contacto = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  }


return (
<>
  <section>
    <ul>
      <li><a href="https://wa.me/5492612197075" class="contact-link">5492512197075</a></li>
      <li><a href="tel:261-4378298" class="contact-link">261-4378298</a></li>
      <li><a href="mailto:libreriacriolla@hotmail.com" class="contact-link">libreriacriolla@hotmail.com</a></li>
    </ul>
  </section>
<section className="formulario">
  <h2> Formulario de contacto</h2>
  {/* <div className="nombre"> Nombre: {watch ('nombre')}</div> */}
  <form onSubmit={handleSubmit(onSubmit)} className="formulario_contenido">
    <div className="formulario_contenido">
      <label> Nombre </label>
      <input type="text" {...register('nombre', {
        required:true,
        maxLength:12
      })} />
  
      {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
      {errors.nombre?.type ==='maxlength' && <p> El campo nombre debe tener menos de 12 caracteres</p>
      }
      
  
    </div>
    <div className="formulario_contenido">
      <label> Apellido </label>
      <input type="text" {...register('apellido',{ required:true
      
      })} />
        {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
    </div>
    <div className="formulario_contenido">
      <label> Email </label>
      <input type="text" {...register('email', {
        required:true,
        pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
      })} />
  
  {errors.nombre?.type === 'required' && <p> El campo nombre es obligatorio </p>
      }
  {errors.email?.type === 'pattern' && <p> El formato es incorrecto </p>
      }
    </div>
    {/* <div className="formulario_contenido">
      <label> Gusto de helado </label>
      <select {...register('sabor')}>
        <option value="ch"> Chocolate </option>
        <option value="dl"> Dulce de leche </option>
        <option value="lm"> Limon </option>
  
      </select>
    </div> */}
    <input type="submit" value="Enviar" className="submit"/>
    
  </form>
  
  </section>
  
  </>
  
  
  );
};
    export default Contacto;