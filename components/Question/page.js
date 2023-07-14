export default function Question({ title, children, flex, margin, animation }) {
  return (
    <div className={`${animation || ""}`}>
      <h4 className="uppercase text-sm font-bold tracking-wider">
        {title}
        <span className="text-red-500 ml-1">*</span>
      </h4>
      <div className={`${flex ? "flex" : ""} ${margin ? "m-3" : "my-3"}`}>
        {children}
      </div>
    </div>
  )
}
