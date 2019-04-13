import React, { Component } from 'react';

class Salud extends Component {
    render(){
      return(
       <React.Fragment>
        <div className="bloques--renglones salud bloque">
          <div className="sidebar-header">
            <h3 className="widget-title">
              Calculadora de salud financiera
            </h3>
          </div>

          <div className="salud__window js--salud__window visible" data-paso="1">
            <div className="salud__contenedor animacion">
              <form accept-charset="utf-8" action="#salud" method="post">
                <h2 className="salud__titulo">
                  Calcula tu salud financiera
                </h2>
                <div className="salud__progreso">
                  <div className="salud__barra">
                    <div className="salud__avance"></div>
                  </div>
                  <div className="bloques--reticula--derecha salud__pasos js--salud__pasos">1 / 8</div>
                </div>
                <fieldset className="salud__paso" data-paso="1">
                  <div className="salud__pregunta">
                    <p>
                      1. El ingreso mensual familiar, ¿cubre generalmente tus gastos fijos?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      Los gastos fijos representan: vivienda, comida, transporte, seguros, servicios públicos, cuidado de los niños, pagos mínimos de créditos y cualquier otro gasto que no puedas reducir u omitir sin tener consecuencias importantes.
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="20" name="ingresos" id="ingresos-1" />
                      <label className="salud__boton" for="ingresos-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Sí y me queda dinero
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="10" name="ingresos" id="ingresos-2" />
                      <label className="salud__boton" for="ingresos-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Sí y no me queda más dinero
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="ingresos" id="ingresos-3" />
                      <label className="salud__boton" for="ingresos-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No, mis gastos regulares exceden mi ingreso mensual
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="ingresos">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="2">
                  <div className="salud__pregunta">
                    <p>
                      2. ¿Qué proporción de tus cuentas por pagar, pagas en tiempo?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      Considera como pago tardío cualquier cuenta que tenga más de 30 días de vencimiento
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="0" name="cuentas" id="cuentas-1" />
                      <label className="salud__boton" for="cuentas-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Ninguna o muy pocas
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="6" name="cuentas" id="cuentas-2" />
                      <label className="salud__boton" for="cuentas-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Algunas o la mayoría
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="cuentas" id="cuentas-3" />
                      <label className="salud__boton" for="cuentas-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Todas o casi todas
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="cuentas" id="cuentas-4" />
                      <label className="salud__boton" for="cuentas-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No tengo cuentas por pagar mensuales
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="cuentas">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="3">
                  <div className="salud__pregunta">
                    <p>
                      3. ¿Con qué frecuencia liquidas el pago mensual de su tarjeta crédito?
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="0" name="liquidas" id="liquidas-1" />
                      <label className="salud__boton" for="liquidas-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Nunca o casi nunca
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="6" name="liquidas" id="liquidas-2" />
                      <label className="salud__boton" for="liquidas-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Ocasionalmente
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="liquidas" id="liquidas-3" />
                      <label className="salud__boton" for="liquidas-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Siempre o casi siempre
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="liquidas" id="liquidas-4" />
                      <label className="salud__boton" for="liquidas-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No tengo tarjetas de crédito
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="liquidas">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="4">
                  <div className="salud__pregunta">
                    <p>
                      4. ¿Cuántas semanas o meses de tus gastos fijos tienes guardados para emergencias? 
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="3" name="emergencias" id="emergencias-1" />
                      <label className="salud__boton" for="emergencias-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Menos de una semana
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="6" name="emergencias" id="emergencias-2" />
                      <label className="salud__boton" for="emergencias-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            1-2 semanas
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="8" name="emergencias" id="emergencias-3" />
                      <label className="salud__boton" for="emergencias-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            3 semanas
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="emergencias" id="emergencias-4" />
                      <label className="salud__boton" for="emergencias-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            1 mes
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="13" name="emergencias" id="emergencias-5" />
                      <label className="salud__boton" for="emergencias-5">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            2 meses
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="15" name="emergencias" id="emergencias-6" />
                      <label className="salud__boton" for="emergencias-6">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            3 meses o más
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="0" name="emergencias" id="emergencias-7" />
                      <label className="salud__boton" for="emergencias-7">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Nada, no tengo nada guardado en caso de emergencia
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="1" name="emergencias" id="emergencias-8" />
                      <label className="salud__boton" for="emergencias-8">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No estoy seguro
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="emergencias">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="5">
                  <div className="salud__pregunta">
                    <p>
                      5. Actualmente, ¿estás ahorrando para tu retiro?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      Fondos suficientes consideran una tasa de remplazo del 70%. Para saber si estás en ese camino, usa la calculadora de retiro.
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="15" name="fondos" id="fondos-1" />
                      <label className="salud__boton" for="fondos-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Si, estoy seguro que mi ahorro me permitirá un retiro cómodo
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="fondos" id="fondos-2" />
                      <label className="salud__boton" for="fondos-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Si pero no estoy seguro que lo que ahorro me dará un retiro cómodo
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="0" name="fondos" id="fondos-3" />
                      <label className="salud__boton" for="fondos-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No, actualmente no ahorro para mi retiro
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="15" name="fondos" id="fondos-4" />
                      <label className="salud__boton" for="fondos-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Ya estoy retirado
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="fondos">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="6">
                  <div className="salud__pregunta">
                    <p>
                      6. El ingreso mensual familiar, ¿cubre generalmente tus gastos fijos?¿Qué tanto tu nivel de endeudamiento (renta o hipoteca, tarjetas de crédito, préstamos) afecta las decisiones que tomas?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      Considera decisiones financieras tan pequeñas como salir a comer, salir de vacaciones, comprar regalos de navidad o tan grandes como el lugar donde vives o el trabajo que aceptas.
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="endeudamiento" id="endeudamiento-1" />
                      <label className="salud__boton" for="endeudamiento-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No afecta ninguna de las decisiones que tomo 
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="7" name="endeudamiento" id="endeudamiento-2" />
                      <label className="salud__boton" for="endeudamiento-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Afecta alguna de mis decisiones
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="0" name="endeudamiento" id="endeudamiento-3" />
                      <label className="salud__boton" for="endeudamiento-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Afecta todas o casi todas las decisiones que tomo
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--cuarto">
                      <input type="radio" required className="input__radio js--radio" value="10" name="endeudamiento" id="endeudamiento-4" />
                      <label className="salud__boton" for="endeudamiento-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No tengo ninguna deuda
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="endeudamiento">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="7">
                  <div className="salud__pregunta">
                    <p>
                      7. ¿Cuál es tu más reciente score en el buró de crédito?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      En la escala de 400  a 850 utilizada por Buró de Crédito, puedes consultarlo gratis en <a href="http://www.burodecredito.com.mx/">www.burodecredito.com.mx</a>
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="buro" id="buro-1" />
                      <label className="salud__boton" for="buro-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            500 o menos
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="7" name="buro" id="buro-2" />
                      <label className="salud__boton" for="buro-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            550-700
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="10" name="buro" id="buro-3" />
                      <label className="salud__boton" for="buro-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            750 o superior
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="buro" id="buro-4" />
                      <label className="salud__boton" for="buro-4">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Nunca he revisado mi score
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="buro" id="buro-5" />
                      <label className="salud__boton" for="buro-5">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No lo recuerdo
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="buro" id="buro-6" />
                      <label className="salud__boton" for="buro-6">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Prefiero no decir
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__siguiente desactivado js--salud__avanzar" data-resuelta="buro">
                      Siguiente
                    </button>
                  </div>
                </fieldset>
                <fieldset className="salud__paso" data-paso="8">
                  <div className="salud__pregunta">
                    <p>
                      8. ¿Crees estar protegido contra alguna pérdida financiera considerable?
                    </p>
                  </div>
                  <div className="salud__descripcion">
                    <p>
                      Considera seguros de vida,  salud, incapacidad, vivienda y autos.
                    </p>
                  </div>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="10" name="protegido" id="protegido-1" />
                      <label className="salud__boton" for="protegido-1">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            Si
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="0" name="protegido" id="protegido-2" />
                      <label className="salud__boton" for="protegido-2">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                    <div className="salud__opcion bloque--tercio">
                      <input type="radio" required className="input__radio js--radio" value="4" name="protegido" id="protegido-3" />
                      <label className="salud__boton" for="protegido-3">
                        <figure>
                          <img src="salud/icon__prueba.svg" alt="" />
                          <figcaption>
                            No estoy seguro
                          </figcaption>
                        </figure>
                      </label>
                    </div>
                  </div>

                  <div className="bloques--reticula--centrado bloque">
                    <button type="button" className="salud__anterior js--salud__regresar">
                      Regresar
                    </button>
                    <button type="button" className="salud__terminar desactivado js--salud__avanzar" data-resuelta="protegido">
                      Finalizar
                    </button>
                  </div>
                </fieldset>

                <div className="salud__paso salud__retroalimentacion" data-paso="9">

                  <h2 className="salud__titulo salud__titulo--blanco">
                    Tu resultado es: <strong><span className="js--salud__total"></span></strong>
                  </h2>
                  <div className="salud__opciones bloques--reticula__renglon">
                    
                    <div className="salud__opcion bloque--full">
                      <figure className="salud__boton">
                        <figcaption className="js--retro__total"></figcaption>
                      </figure>
                    </div>

                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_ingresos" />
                        <figcaption className="js--retro__cantidad_ingresos"></figcaption>
                        <figcaption className="js--retro__ingresos"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_cuentas" />
                        <figcaption className="js--retro__cantidad_cuentas"></figcaption>
                        <figcaption className="js--retro__cuentas"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_liquidas" />
                        <figcaption className="js--retro__cantidad_liquidas"></figcaption>
                        <figcaption className="js--retro__liquidas"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_emergencias" />
                        <figcaption className="js--retro__cantidad_emergencias"></figcaption>
                        <figcaption className="js--retro__emergencias"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_fondos" />
                        <figcaption className="js--retro__cantidad_fondos"></figcaption>
                        <figcaption className="js--retro__fondos"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_endeudamiento" />
                        <figcaption className="js--retro__cantidad_endeudamiento"></figcaption>
                        <figcaption className="js--retro__endeudamiento"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_buro" />
                        <figcaption className="js--retro__cantidad_buro"></figcaption>
                        <figcaption className="js--retro__buro"></figcaption>
                      </figure>
                    </div>
                    <div className="salud__opcion bloque--mitad">
                      <figure className="salud__boton">
                        <img src="" alt="" className="js--retro__icono_protegido" />
                        <figcaption className="js--retro__cantidad_protegido"></figcaption>
                        <figcaption className="js--retro__protegido"></figcaption>
                      </figure>
                    </div>

                  </div>
                  <div className="salud__pregunta salud__pregunta--blanco">
                    <p>
                      ¿Qué esperas para mejorar tu salud financiera?
                    </p>
                    <p>
                      Acercarte a nuestros finadvisors por una asesoría:
                    </p>
                  </div>
                  <fieldset>
                    <div className="bloques--reticula__renglon" style={"padding: 1rem";}>
                      <input type="text" placeholder="Nombre" id="nombre" name="nombre" className="rendimiento__input bloque--full" required />
                      <input type="email" placeholder="Email" id="email" name="email" className="rendimiento__input bloque--mitad" required />
                      <input type="text" placeholder="Teléfono" id="telefono" name="telefono" className="rendimiento__input bloque--mitad" required />

                      <input type="hidden" className="js--total" name="total" id="total" />
                    </div>
                  </fieldset>

                  <div className="bloques--reticula--centrado bloque">
                    <input type="submit" className="salud__anterior desactivado js--salud__avanzar" value="Contactar un asesor" />
                  </div>
                  <div className="bloque">&nbsp;</div>
                </div>

              </form>
            </div>

          </div>
      </div>

      </React.Fragment>
      );

}
}
export default Salud;