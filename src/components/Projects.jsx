
import bookandplay from '../assets/book&play_round.png'
import agrolink from '../assets/agrolink.png'
import store from '../assets/store3.png'
import blog from '../assets/blog.png'
import logo from '../assets/logo.png'

import Grid from '@mui/material/Grid'

import ProjectItem from './ProjectItem';
import Typography from '@mui/material/Typography';



const  Projects = ()=> {
  const gitHub = 'https://github.com/jdmc-unah/'

  const projects = [
    
    {title: 'Tienda en Línea', 
      subheader: 'Enero, 2025', git: 'TiendaEnLinea-MVC', link: null,
      image: store, description: 'Aplicación web desarrollada con ASP.NET MVC en C#, diseñada para funcionar como una tienda en línea con datos dinámicos. La solución está dividida en dos módulos principales: Dashboard Administrativo y Tienda Pública' 
    },
    {title: 'Agrolink', 
      subheader: 'Julio, 2025', git: 'AgroLink', link: null,
      image: agrolink, description: 'Sistema cliente-servidor (cliente liviano), donde la interfaz gráfica fue desarrollada en C# con Windows Forms, y toda la lógica de negocio y procesamiento de datos se gestiona directamente en el servidor a través de stored procedures y funciones en SQL Server.' 
    },
    {title: 'Book & Play App', 
      subheader: 'Julio, 2025', git: 'AppReservarCanchas', link: null,
      image: bookandplay, description: 'Construida con Flutter y respaldada por los servicios de Firebase, permite a los usuarios registrarse, buscar, reservar y pagar por espacios deportivos de forma rápida y confiable' 
    },
    {title: 'BlogList App', 
      subheader: 'Agosto, 2025', git: 'BlogList-API', link: 'https://bloglist-app-njab.onrender.com/',
      image: blog, description: 'Aplicación web desarrollada con React y API RESTful construida con Node.js y Express. Permite  gestionar publicaciones de blog  y cuenta con un sistema básico de autenticación mediante JSON Web Tokens (JWT). ' 
    },
      {title: 'Autoverstat', 
      subheader: 'Septiembre, 2025', git: null, link: 'https://autoverstat.vercel.app/',
      image: logo, description: 'App web para taller de enderezado automotriz, desarrollada con React y Material UI. Permite agendar citas vía Google Calendar, ver la ubicación en un mapa interactivo y contactar fácilmente por redes sociales. Diseño moderno, funcional y adaptable a cualquier dispositivo. ' 
    },


  ]
  

  return (
    <section style={{ padding:'2rem', paddingBottom:'4rem' ,backgroundColor: window.secondary }} >
      
      
      <Typography variant='h3' gutterBottom  style={{textAlign:'center'}} >Proyectos</Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        
      >
        {projects.map((p)=>(
           <Grid>
              <ProjectItem title={p.title} subheader= {p.subheader} 
              gitLink= { p.git != null ? `${gitHub}${p.git}` : null}  image={p.image} 
              description= {p.description} webLink={p.link}
              />
            </Grid>
        ))}

      </Grid>
      
          

    </section>
  );
}

export default Projects;