import React from 'react'
import { useFormik } from 'formik'
import imagenLogo from '../images/logo.jpg'
import * as Yup from 'yup';


const Login = () => {

  const formik = useFormik({
    initialValues: {
      tecnico: '',
      password: ''
    },
    validationSchema: Yup.object({
      tecnico: Yup.string().required('El tecnico es obligatorio'),
      password: Yup.string().required('El password es obligatorio').min(7, 'El password debe tener al menos 7 caracteres')
    }),
    onSubmit: valores => {
      console.log(valores)
    }
  })

  return (
    <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 pt-10">
    <h2 className="text-5xl font-sas font-bold text-center my-4 text-black pb-5">INICIAR SESION</h2>

    <div className="flex justify-center mt-5 pt-[50px] px-[25px]">
        <div className="w-full max-w-lg">
            <form 
                className="bg-black rounded border border-zinc-800 shadow-2xl px-8 pt-6 pb-8 mb-4"
                onSubmit={formik.handleSubmit}
            >
            <div className="mb-4">
                <label 
                    className="block hover:text-white text-sm font-bold mb-2 text-blue-300"
                    htmlFor="tecnico"
                >
                    TECNICO
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border-rounded w-full py-2 px-3 text-grey-700 border border-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="tecnico"
                    placeholder="Nombre de Usuario"
                    value={formik.values.tecnico}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.tecnico && formik.errors.tecnico ? (
                  <div className="my-2 bg-white text-2xl border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.tecnico}</p>
                  </div>
                ) : null}
            </div>
                        
            <div className="mb-4">
                <label 
                    className="block hover:text-white text-sm font-bold mb-2 text-blue-300"
                    htmlFor="password"
                >
                    PASSWORD
                </label>
                <input
                    type="password"
                    className="shadow appearance-none border-rounded w-full py-3 px-3 text-grey-700 border border-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="my-2 bg-white text-2xl border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
            </div>
                <input
                    type="submit"
                    className="hover:bg-[#015ae1] bg-white w-full p-2 pt-2 text-black hover:text-white uppercase font-bold mt-4"
                    value="Iniciar Sesion"
                />
            </form>
        </div>
    </div>
</div>
  )
}

export default Login