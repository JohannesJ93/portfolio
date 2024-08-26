import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div id="contact" className=" bg-transparent  text-center ">

      <h2 className="text-3xl font-bold mb-5" >Johannes Jokinen</h2>



      <h3 className="font-semibold text-xl font-bold mb-3">Jyväskylä, Finland</h3>

      <ul className="text-xl font-bold mb-4">
        <li className="text-xl font-bold mb-4">
          <span className="icon">
            <PhoneIcon />
          </span>
          <span className="text-xl font-bold mb-4">+358 50 5353 220</span>
        </li>
        <li className="text-xl font-bold mb-4">
          <span className="icon text-xl font-bold mb-3">
            <EmailIcon />
          </span>
          <span className="text-xl text font-bold mb-3" >
            johannes.jokinen_93@hotmail.com
          </span>
        </li>
        <li className="text-xl font-bold mb-4">
          <span className="icon mb-3">
            <LinkedInIcon />
          </span>
          <span className="text text-xl font-bold pt5 mt-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/johannes-jokinen/"
            >
              Johannes Jokinen
            </a>
          </span>
        </li>

      </ul>
    </div>



  )
}
