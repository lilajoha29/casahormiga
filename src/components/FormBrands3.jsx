import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Formik, Form } from 'formik'

const FormBrands3 = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center p-10  font-Papyrus'>
        <h1 className="p-5 text-xl">Expresa tus ideas</h1>
        <h2 className='text-center'>Dinos lo que buscas para ofrecerte un diseño único de acuerdo a tu gusto o necesidad.</h2>
      </div>
      <Formik 
        initialValues={{
          name: '',
          tel:'',
          email: '',
          theme:'',
          amount: '',
          descrip:'',
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.name) {
            errores.name = 'ingresa tu nombre'
          }
          if (!valores.tel) {
            errores.tel = 'ingresa tu número de contacto'
          }
          if (!valores.email) {
            errores.email = 'ingresa tu correo electronico'
          }
          if (!valores.theme) {
            errores.theme = 'ingresa tu temática'
          }
          if (!valores.amount) {
            errores.amount = 'ingresa la cantidad que necesitas'
          }
          if (!valores.descrip) {
            errores.descrip = 'ingresa una descripción de tu proyecto '
          }
          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
          resetForm();
          console.log('formulario enviado');
        }}
      >
        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <Form
            className='flex flex-col p-8 font-Papyrus'
            onSubmit={handleSubmit}>
            <div className='flex flex-row items-center'>
              <label for="name" className=''>Nombre</label>
              <input
                className='py-1 my-5 ml-3 w-full bg-gray rounded-lg'
                type="text"
                id='name'
                name='name'
                placeholder='John Doe'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.name && errors.name && <div className="mt-14 text-logo w-full absolute">{errors.name}</div>}
            </div>
            <div className='flex flex-row items-center'>
              <label for="tel">Telefono</label>
              <input
                className='py-1 my-5 ml-3 w-full bg-gray rounded-lg'
                type="tel"
                id='tel'
                name='tel'
                placeholder='000 0000000'
                value={values.tel}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.tel && errors.tel && <div className="mt-14 text-logo w-full absolute">{errors.tel}</div>}
            </div>
            <div className='flex flex-row items-center'>
              <label for="email">Email</label>
              <input
                className='py-1 my-5 ml-3 w-full bg-gray rounded-lg'
                type="email"
                id='email'
                name='email'
                placeholder='correo@correo-com'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.email && errors.email && <div className="mt-14 text-logo w-full absolute">{errors.email}</div>}
            </div>
            <div className='flex flex-row items-center'>
              <label for="theme">Temática</label>
              <input
                className='py-1 my-5 ml-3 w-full bg-gray rounded-lg'
                type="text"
                id='theme'
                name='theme'
                placeholder='cumpleaños - reunion empresarial'
                value={values.theme}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.theme && errors.theme && <div className="mt-14 text-logo w-full absolute">{errors.theme}</div>}
            </div>
            <div className='flex flex-row items-center'>
              <label for="amount">Cantidad</label>
              <input
                className='py-1 my-5 ml-3 w-full bg-gray rounded-lg'
                type="text"
                id='amount'
                name='amount'
                placeholder='100 unidades'
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.amount && errors.amount && <div className="mt-14 text-logo w-full absolute">{errors.amount}</div>}
            </div>
            <div className='flex flex-col items-center'>
              <label for="descrip" className=''>Descríbenos la idea que tienes</label>
              <input
                className='py-14 mb-16 my-5 w-full bg-gray rounded-lg  '
                type="text"
                id='descrip'
                name='descrip'
                placeholder='me gustaria hacer ...'
                value={values.descrip}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {touched.descrip && errors.descrip && <div className="mt-48 ml-14 text-logo w-full absolute">{errors.descrip}</div>}
            </div>
            <button className='m-auto p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo'>Enviar idea</button>
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  )
}

export default FormBrands3