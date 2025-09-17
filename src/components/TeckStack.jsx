export default function TechStack({image, title}) {
  return <>
    <div className="flex">
      <img className="w-8 h-8" src={image} alt={title} />
      <p className="p-1">{title}</p>
    </div>
  </>
}