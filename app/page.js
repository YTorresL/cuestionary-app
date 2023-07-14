"use client"
import {
  IconBxsBusiness,
  IconLink,
  IconMoneyCheckDollar,
  IconTelephoneFill,
  IconTruckDelivery,
  User,
} from "@/components/Icons/page"
import Question from "@/components/Question/page"
import { useState } from "react"

const initValues = {
  name: "",
  phone: "",
  typeBusiness: "",
  remodelWebsite: "",
  linkPage: "",
  typeProject: "",
  information: "",
  addServices: "",
  obligation: "",
  haveDeliveryDate: "",
  deliveryDate: "",
  haveLimitedBudget: "",
  limitedBudget: "",
  socialMedia: "",
  generalObjective: "",
  specificObjectives: "",
  imagesOrIdeas: "",
  comment: "",
}

const initState = { values: initValues }

export default function Home() {
  const [state, setState] = useState(initState)
  const { values } = state
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const isDisabled = !values.name.length || !values.comment.length

  return (
    <main>
      <section className="flex justify-center items-center">
        <form className="w-[90%] sm:w-[50%] lg:w-[36%] py-[13%]">
          <h1 className="text-xl lg:text-3xl uppercase font-bold">
            Cuestionario de cotización
          </h1>
          <p className="my-4">
            Responde nuestro cuestionario de cotización y obtén una estimación
            personalizada para tus necesidades. ¡Sin compromisos ni costos
            ocultos! Simplifica tu búsqueda y encuentra la mejor opción para ti.
          </p>
          <Question
            title={"Nombre y apellido"}
            flex
            animation={
              "animate-fade animate-once animate-ease-in animate-delay-500"
            }
          >
            <User className="h-8 w-8 mr-3" />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Alicia Nava"
              className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
              required
            />
          </Question>
          {values.name.length > 0 && (
            <Question
              title={"Telefono"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <IconTelephoneFill className="h-7 w-7 mr-3" />
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+1(208) 369-6789"
                className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              />
            </Question>
          )}
          {values.phone.length > 0 && (
            <Question
              title={"Tipo de negocio"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <IconBxsBusiness className="h-8 w-8 mr-3" />
              <input
                type="text"
                name="typeBusiness"
                value={values.typeBusiness}
                onChange={handleChange}
                placeholder="Inmobiliario, seguros medicos..."
                className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              />
            </Question>
          )}
          {values.typeBusiness.length > 0 && (
            <Question
              title={"¿Desea remodelar su página web?"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="remodelWebsite"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.remodelWebsite === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="remodelWebsite"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.remodelWebsite === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.remodelWebsite === "Si" && (
            <Question
              title={"Link de la página"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <IconLink className="h-8 w-8 mr-3" />
              <input
                type="text"
                name="linkPage"
                value={values.linkPage}
                onChange={handleChange}
                placeholder="https://portfolio-app-inky.vercel.app/"
                className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              />
            </Question>
          )}
          {(values.remodelWebsite === "No" || values.linkPage.length > 0) && (
            <Question
              title={"Tipo de proyecto"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  value={"Landing page"}
                  name="typeProject"
                  onChange={handleChange}
                  checked={values.typeProject === "Landing page"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Landing page
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"Portfolio"}
                  name="typeProject"
                  onChange={handleChange}
                  checked={values.typeProject === "Portfolio"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Portfolio
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"Business"}
                  name="typeProject"
                  onChange={handleChange}
                  checked={values.typeProject === "Business"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Business
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={"Otro"}
                  name="typeProject"
                  onChange={handleChange}
                  checked={values.typeProject === "Otro"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Otro
                </label>
              </div>
            </Question>
          )}
          {values.typeProject && (
            <Question
              title={
                "¿Tiene la información necesaria para empezar la página web? (Logo, Marca, información)"
              }
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="information"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.information === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="information"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.information === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.information === "No" && (
            <div className="animate-fade animate-once animate-ease-in animate-delay-500">
              <p className="text-red-500 font-bold mb-3">
                Es necesario tener toda la información necesaria para poder
                comenzar el proyecto, ya que de no estar completa el proyecto se
                podria retrasar.
              </p>
              <Question
                title={
                  "¿Desea contratar un servicio para el desarrollo de lo antes mencionado?"
                }
                margin
              >
                <div>
                  <input
                    type="checkbox"
                    name="addServices"
                    value={"Si"}
                    onChange={handleChange}
                    checked={values.addServices === "Si"}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Si
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="addServices"
                    value={"No"}
                    onChange={handleChange}
                    checked={values.addServices === "No"}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    No
                  </label>
                </div>
              </Question>
            </div>
          )}
          {values.addServices === "No" && (
            <Question
              title={
                "¿Se compromete a entregar la información necesaria para comenzar el trabajo?"
              }
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="obligation"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.obligation === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="obligation"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.obligation === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.obligation === "No" && (
            <div className="animate-fade animate-once animate-ease-in animate-delay-500">
              <p className="text-red-500 font-bold mb-3">
                Es necesario tener toda la información necesaria para poder
                comenzar el proyecto, ya que de no estar completa el proyecto se
                podria retrasar.
              </p>
            </div>
          )}
          {(values.information === "Si" ||
            values.obligation === "Si" ||
            values.addServices === "Si") && (
            <Question
              title={"¿Tiene fecha de entrega?"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="haveDeliveryDate"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.haveDeliveryDate === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="haveDeliveryDate"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.haveDeliveryDate === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.haveDeliveryDate === "Si" && (
            <Question
              title={"Escriba la fecha de entrega"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <IconTruckDelivery className="h-8 w-8 mr-3" />
              <input
                type="text"
                name="deliveryDate"
                value={values.deliveryDate}
                onChange={handleChange}
                placeholder="15 de diciembre del 2049"
                className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              />
            </Question>
          )}
          {(values.haveDeliveryDate === "No" ||
            values.deliveryDate.length > 0) && (
            <Question
              title={"¿Tiene un presupuesto limitado?"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="haveLimitedBudget"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.haveLimitedBudget === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="haveLimitedBudget"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.haveLimitedBudget === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.haveLimitedBudget === "Si" && (
            <Question
              title={"Escriba su presupuesto"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <IconMoneyCheckDollar className="h-7 w-7 mr-3" />
              <input
                type="text"
                name="limitedBudget"
                value={values.limitedBudget}
                onChange={handleChange}
                placeholder="700 $"
                className="border-b border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              />
            </Question>
          )}
          {(values.haveLimitedBudget === "No" ||
            values.limitedBudget.length > 0) && (
            <Question
              title={"¿Cómo me conociste?"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="socialMedia"
                  value={"Instagram"}
                  onChange={handleChange}
                  checked={values.socialMedia === "Instagram"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Instagram
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="socialMedia"
                  value={"Twitter"}
                  onChange={handleChange}
                  checked={values.socialMedia === "Twitter"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Twitter
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="socialMedia"
                  value={"Recomendación"}
                  onChange={handleChange}
                  checked={values.socialMedia === "Recomendación"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Recomendación
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="socialMedia"
                  value={"Otro"}
                  onChange={handleChange}
                  checked={values.socialMedia === "Otro"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Otro
                </label>
              </div>
            </Question>
          )}
          {values.socialMedia && (
            <Question
              title={"Objetivo general"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <textarea
                type="text"
                name="generalObjective"
                value={values.generalObjective}
                onChange={handleChange}
                placeholder="Generar conciencia y promover la causa de la organización para obtener apoyo y donaciones."
                className="border-b h-20 border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              ></textarea>
            </Question>
          )}
          {values.generalObjective && (
            <Question
              title={"Objetivos específicos"}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <textarea
                type="text"
                name="specificObjectives"
                value={values.specificObjectives}
                onChange={handleChange}
                placeholder="Explicar claramente la misión y los objetivos de la organización para generar conciencia y comprensión."
                className="border-b h-20 border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              ></textarea>
            </Question>
          )}
          {values.specificObjectives && (
            <Question
              title={"¿Tiene imágenes o ideas sobre cómo deseas la página web?"}
              margin
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <div>
                <input
                  type="checkbox"
                  name="imagesOrIdeas"
                  value={"Si"}
                  onChange={handleChange}
                  checked={values.imagesOrIdeas === "Si"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Si
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="imagesOrIdeas"
                  value={"No"}
                  onChange={handleChange}
                  checked={values.imagesOrIdeas === "No"}
                />
                <label htmlFor="checkbox" className="ml-2">
                  No
                </label>
              </div>
            </Question>
          )}
          {values.imagesOrIdeas && (
            <Question
              title={"Comenta cualquier cosa que desees mencionar "}
              flex
              animation={
                "animate-fade animate-once animate-ease-in animate-delay-500"
              }
            >
              <textarea
                type="text"
                name="comment"
                value={values.comment}
                onChange={handleChange}
                placeholder="La pagina deber tener dinamismo, y tener una estetica minimalista."
                className="border-b h-20 border-gray-300 my-3 w-full outline-none appearance-none bg-transparent focus:border-blue-500"
                required
              ></textarea>
            </Question>
          )}

          <input
            type="submit"
            value="Enviar"
            className={`fixed bottom-[6%] right-[4%] bg-blue-500 rounded-full px-8 py-2 uppercase text-sm font-bold tracking-wider text-white hover:bg-blue-700 duration-300 transition ease-in-out cursor-pointer ${
              isDisabled ? "disabled:bg-gray-500 disabled:cursor-default" : ""
            }`}
            disabled={isDisabled}
          />
        </form>
      </section>
    </main>
  )
}
