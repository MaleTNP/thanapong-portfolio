export default function SocialIcon({ image, name, link }) {
  return <>
    <div className="flex flex-row justify-center space-x-8">
      <div className="flex flex-col items-center space-y-6">
        <a href={link}>
          <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full" >
            <img className="w-8 h-8" src={image}/>
          </div>
        </a>
        <div>{name}</div>
      </div>
    </div>
  </>
}
