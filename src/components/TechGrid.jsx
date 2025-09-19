export default function TechStackGrid({image, title, group}) {
  return <>
    <div>
      <div>{group}</div>
      <div className="flex items-center">
        <img className="w-8 h-8" src={image} alt={title} />
        <p className="p-1">{title}</p>
      </div>
    </div>
  </>
}