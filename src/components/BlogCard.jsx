export default function BlogCard({ image, title, description, link}) {
  return <>
    <div className="bg-blue-200 rounded-2xl overflow-hidden">
      <div>
        <img src={image} alt={title}
          className="w-full object-cover"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Read More</a>
      </div>
    </div>
  </>
}