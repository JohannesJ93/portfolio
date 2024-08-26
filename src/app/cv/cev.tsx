import React from 'react';
import './uuscv.css'; // Make sure this path is correct
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CakeIcon from '@mui/icons-material/Cake';
import PublicIcon from '@mui/icons-material/Public';
import Image from 'next/image';


export default function CV() {
  return (
    <div className="container ceeveepala">
      <div className="left_Side">
        <div className="profileText">
          <div className="imgBx">
            <Image width={200} height={200} src="/assets/profiilikuva2.jpg" alt="Profile" />
          </div>
          <h2>
            Johannes Jokinen
            <br />
            <span>Software Developer</span>
          </h2>
        </div>

        <div className="contactInfo">
          <h3 className="title">Contact info</h3>
          <ul>
            <li>
              <span className="icon">
                <PhoneIcon />
              </span>
              <span className="text">+358 50 5353 220</span>
            </li>
            <li>
              <span className="icon">
                <EmailIcon />
              </span>
              <span className="text" style={{ fontSize: '12px' }}>
                johannes.jokinen_93@hotmail.com
              </span>
            </li>
            <li>
              <span className="icon">
                <LinkedInIcon />
              </span>
              <span className="text">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/johannes-jokinen/"
                >
                  Johannes Jokinen
                </a>
              </span>
            </li>
            <li>
              <span className="icon">
                <CakeIcon />
              </span>
              <span className="text">12.05.1993</span>
            </li>
            <li>
              <span className="icon">
                <PublicIcon />
              </span>
              <span className="text">Jyväskylä, Finland</span>
            </li>
          </ul>
        </div>

        <div className="contactInfo education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <h5>2019 - 2023</h5>
              <h4>Bachelor of Business Information Technology</h4>
              <h4>Jyväskylä University of Applied Sciences</h4>
            </li>
            <li>
              <h5>2012-2013</h5>
              <h4>Management Training</h4>
              <h4>Lahden Urheilujoukot</h4>
            </li>
            <li>
              <h5>2010-2015</h5>
              <h4>Vocational Qualification for Business</h4>
              <h4>Jyväskylän Vocational School</h4>
            </li>
          </ul>
        </div>

        <div className="contactInfo language">
          <h3 className="title">Languages</h3>
          <ul>
            <li>
              <span className="text">Finnish</span>
              <span className="percent">
                <div style={{ width: '100%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">English</span>
              <span className="percent">
                <div style={{ width: '93%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">Swedish</span>
              <span className="percent">
                <div style={{ width: '45%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">German</span>
              <span className="percent">
                <div style={{ width: '30%' }}></div>
              </span>
            </li>
          </ul>
        </div>

       {/*  <div className="contactInfo language">
          <h3 className="title">Professional Skills</h3>
          <ul>
            <li>
              <span className="text">HTML</span>
              <span className="percent">
                <div style={{ width: '95%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">CSS</span>
              <span className="percent">
                <div style={{ width: '93%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">TypeScript</span>
              <span className="percent">
                <div style={{ width: '88%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">Angular</span>
              <span className="percent">
                <div style={{ width: '85%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">Python</span>
              <span className="percent">
                <div style={{ width: '85%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">Machine Learning</span>
              <span className="percent">
                <div style={{ width: '55%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">Pandas</span>
              <span className="percent">
                <div style={{ width: '80%' }}></div>
              </span>
            </li>
            <li>
              <span className="text">SQL</span>
              <span className="percent">
                <div style={{ width: '35%' }}></div>
              </span>
            </li>
          </ul>
        </div> */}
      </div>

      <div className="right_Side">
       {/*  <div className="about">
          <h2 className="title2">Profile</h2>
          <p>
            I am a software developer who graduated from JAMK in July 2023. Before starting my Bachelor's degree, I played floorball at the national level. Currently, I am working at Lemonsoft as a Software Developer and coaching the O2JKL men's floorball team.
          </p>
        </div> */}

        <div className="about">
          <h2 className="title2">Experience</h2>
          <div className="box">
            <div className="year_company">
              <h5>2023-</h5>
              <h5>Meiko</h5>
            </div>
            <div className="text">
              <h4>Fullstack Developer</h4>
              <p>Developing different projects using Laravel and React.</p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2023</h5>
              <h5>Ely-keskus</h5>
            </div>
            <div className="text">
              <h4>Software Developer</h4>
              <p>Automating Excel data handling tasks with Python.</p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2021 - 2023</h5>
              <h5>Lemonsoft / Metsys</h5>
            </div>
            <div className="text">
              <h4>Software Developer</h4>
              <p>
                Frontend development, UI design, and development with Angular.
                Creating user-centric interfaces for a warehouse management
                system.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2021</h5>
              <h5>Aksulit</h5>
            </div>
            <div className="text">
              <h4>General Worker</h4>
              <p>
                Constructing, testing, and performing operational tasks for
                customer projects. Setting up a pilot environment and building a
                customer-specific operating environment. This included over a
                hundred networked computers with necessary additional devices,
                including NFC readers.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2018 - 2019</h5>
              <h5>Eberhard</h5>
            </div>
            <div className="text">
              <h4>Warehouse Worker</h4>
              <p>
                Repairing water pipes, performing metal engravings, and fixing
                construction site tools.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2017 - 2018</h5>
              <h5>Linköping / <br />
                Kalmarsund</h5>
            </div>
            <div className="text">
              <h4>Floorball Player</h4>
              <p>Playing floorball professionally.</p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2016 - 2017</h5>
              <h5>Burri Public <br /> Elements</h5>
            </div>
            <div className="text">
              <h4>Painter</h4>
              <p>Painting wood and metalwork.</p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2015</h5>
              <h5>Tietoakseli</h5>
            </div>
            <div className="text">
              <h4>Trainee</h4>
              <p>
                Accounting for three different companies, preparing financial
                statements, managing travel invoices, and performing other
                office work.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="year_company">
              <h5>2014</h5>
              <h5>Keski-Suomen Liikepalvelut</h5>
            </div>
            <div className="text">
              <h4>Trainee</h4>
              <p>
                Accounting, preparing financial statements, and performing other
                office work.
              </p>
            </div>
          </div>
        </div>

  {/*       <div className="about">
          <h2 className="title2">More about me</h2>
          <p>
            I have around two and a half years of experience with Angular
            development, almost a year of experience with Laravel and PHP. Most of the time I have been working on projects. 
           
            <br />
            <br />
            I started as an intern at
            Lemonsoft/Metsys after my second year of school and worked there until August 2023. During school, I
            worked mostly two or three days a week, except during summers when I
            worked full-time.
            <br />
            <br />
            
            <br />
            Aside from Angular development, I have a lot of experience with
            Python. For my thesis where I created a user interface to calculate odds
            for ice hockey games. The application scrapes data from the web and
            provides the user with odds calculations within seconds. The
            application is built using Flask and utilizes Pandas and Excel for
            data manipulation. To ensure utmost accuracy in the calculations,
            the application includes a hockey simulation with approximately 900
            rows of data. If you're interested, you can find the complete thesis{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue' }}
              href="Opinnaytetyo_Johannes_Jokinenx.pdf"
              download
            >
              here
            </a>
            .
          </p>
        </div> */}
      </div>
    </div>
  );
}
