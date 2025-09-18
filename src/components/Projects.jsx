
import bookandplay from '../assets/book&play_round.png'
import agrolink from '../assets/agrolink.png'
import store from '../assets/store3.png'
import blog from '../assets/blog.png'
import logo from '../assets/logo.png'

// import Grid from '@mui/material/Grid'

// import ProjectItem from './ProjectItem';
// import Typography from '@mui/material/Typography';



// const  Projects = ()=> {
//   const gitHub = 'https://github.com/jdmc-unah/'

//   const projects = [
    
//     {title: 'Tienda en Línea', 
//       subheader: 'Enero, 2025', git: 'TiendaEnLinea-MVC', link: null,
//       image: store, description: 'Aplicación web desarrollada con ASP.NET MVC en C#, diseñada para funcionar como una tienda en línea con datos dinámicos. La solución está dividida en dos módulos principales: Dashboard Administrativo y Tienda Pública' 
//     },
//     {title: 'Agrolink', 
//       subheader: 'Julio, 2025', git: 'AgroLink', link: null,
//       image: agrolink, description: 'Sistema cliente-servidor (cliente liviano), donde la interfaz gráfica fue desarrollada en C# con Windows Forms, y toda la lógica de negocio y procesamiento de datos se gestiona directamente en el servidor a través de stored procedures y funciones en SQL Server.' 
//     },
//     {title: 'Book & Play App', 
//       subheader: 'Julio, 2025', git: 'AppReservarCanchas', link: null,
//       image: bookandplay, description: 'Construida con Flutter y respaldada por los servicios de Firebase, permite a los usuarios registrarse, buscar, reservar y pagar por espacios deportivos de forma rápida y confiable' 
//     },
//     {title: 'BlogList App', 
//       subheader: 'Agosto, 2025', git: 'BlogList-API', link: 'https://bloglist-app-njab.onrender.com/',
//       image: blog, description: 'Aplicación web desarrollada con React y API RESTful construida con Node.js y Express. Permite  gestionar publicaciones de blog  y cuenta con un sistema básico de autenticación mediante JSON Web Tokens (JWT). ' 
//     },
//       {title: 'Autoverstat', 
//       subheader: 'Septiembre, 2025', git: null, link: 'https://autoverstat.vercel.app/',
//       image: logo, description: 'App web para taller de enderezado automotriz, desarrollada con React y Material UI. Permite agendar citas vía Google Calendar, ver la ubicación en un mapa interactivo y contactar fácilmente por redes sociales. Diseño moderno, funcional y adaptable a cualquier dispositivo. ' 
//     },


//   ]
  

//   return (
//     <section style={{ padding:'2rem', paddingBottom:'4rem' ,backgroundColor: window.secondary }} >
      
      
//       <Typography variant='h3' gutterBottom  style={{textAlign:'center'}} >Proyectos</Typography>

//       <Grid
//         container
//         spacing={2}
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         alignContent="center"
//         wrap="wrap"
        
//       >
//         {projects.map((p)=>(
//            <Grid key={p.title}>
//               <ProjectItem  title={p.title} subheader= {p.subheader} 
//               gitLink= { p.git != null ? `${gitHub}${p.git}` : null}  image={p.image} 
//               description= {p.description} webLink={p.link}
//               />
//             </Grid>
//         ))}

//       </Grid>
      
          

//     </section>
//   );
// }

// export default Projects;


import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem"; // 👈 tu componente individual

// Variants para animación en cascada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        backgroundColor: '#e5e5e558',
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        fontWeight="700"
        gutterBottom
        align="center"
        sx={{ mb: { xs: 4, md: 6 }, color: "#111" }}
      >
       Mis  <span style={{ color: "#60a5fa" }}>Proyectos</span> 
      </Typography>

      {/* Grid con animaciones */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {projects.map((p, i) => (
            <Grid
              size={{xs: 12, sm:6, md: 4}}
              
              key={p.title}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#e5e5e558",
                }}
              >
                <ProjectItem
                  title={p.title}
                  subheader={p.subheader}
                  gitLink={p.git != null ? `${gitHub}${p.git}` : null}
                  image={p.image}
                  description={p.description}
                  webLink={p.link}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;
