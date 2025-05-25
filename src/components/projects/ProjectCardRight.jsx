export default function ProjectCardRight(props) {
  return (
    <>
      <div
        data-theme="winter"
        className="du-card mx-8 lg:mx-auto lg:du-card-side bg-base-100"
      >
        <figure>
          <img
            className="du-rounded-box"
            src={props.img_src}
            alt="Project Image"
          />
        </figure>
        <div className="du-card-body">
          <h2 className="du-card-title">{props.title}</h2>
          <p className="text-justify py-6">{props.description}</p>
          <h3 className="text-lg font-bold">Tech Used: </h3>
          <p className="text-justify py-2">{props.tech}</p>
          <div className="du-card-actions justify-center">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="du-btn w-full du-btn-primary"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
