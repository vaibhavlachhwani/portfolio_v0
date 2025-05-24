import linkedin_icon from "../../assets/icon-linkedin.svg";
import github_icon from "../../assets/icon-github.svg";
import school_icon from "../../assets/icon-school.svg";
import email_icon from "../../assets/icon-email.svg";

export default function SocialComponent() {
  const social_links = [
    {
      name: "LinkedIn",
      icon: linkedin_icon,
      url: "https://www.linkedin.com/in/vaibhavlachhwani/",
    },
    {
      name: "GitHub",
      icon: github_icon,
      url: "https://github.com/vaibhavlachhwani",
    },
    {
      name: "Student Profile",
      icon: school_icon,
      url: "https://iiitkota.ac.in/student/20231011",
    },
    {
      name: "Email",
      icon: email_icon,
      url: "mailto:vaibhav.lachhwani111@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex flex-row space-x-8 items-center justify-center">
        {social_links.map((item, index) => (
          <div key={index} className="size-18">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center  "
            >
              <img
                src={item.icon}
                alt={item.name + " icon"}
                className="size-8"
              />
              <p className="mt-1 text-center">{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
