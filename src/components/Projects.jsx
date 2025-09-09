
import bookandplay from '../assets/book&play_round.png'
import agrolink from '../assets/agrolink.png'
import store from '../assets/store3.png'
import blog from '../assets/blog.png'

import Grid from '@mui/material/Grid'

import ProjectItem from './ProjectItem';
import Typography from '@mui/material/Typography';



const  Projects = ()=> {
  const gitHub = 'https://github.com/jdmc-unah/'


  

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
         <Grid>
            <ProjectItem title={'Tienda en Línea'} subheader="Enero, 2025" 
            link= {`${gitHub}TiendaEnLinea-MVC`}  image={store} 
            description="Aplicación web desarrollada con ASP.NET MVC en C#, diseñada para funcionar como una tienda en línea con datos dinámicos. 
            La solución está dividida en dos módulos principales: Dashboard Administrativo y Tienda Pública "
            />
        </Grid>

        <Grid>
            <ProjectItem title={'Agrolink'} subheader="Julio, 2025" 
            link= {`${gitHub}AgroLink`} image={agrolink} 
            description="Sistema cliente-servidor (cliente liviano), donde la interfaz gráfica fue desarrollada en C# con Windows Forms, y 
            toda la lógica de negocio y procesamiento de datos se gestiona directamente en el servidor a través de stored procedures y 
            funciones en SQL Server."
            />
        </Grid>

        <Grid>
            <ProjectItem title={'Book & Play App'} subheader="Julio, 2025" 
            link= {`${gitHub}AppReservarCanchas`}  image={bookandplay} 
            description="Construida con Flutter y respaldada por los servicios de Firebase, permite a los usuarios registrarse, 
            buscar, reservar y pagar por espacios deportivos de forma rápida y confiable"
            />
        </Grid>

       

        <Grid>
            <ProjectItem title={'BlogList App'} subheader="Agosto, 2025" 
            link= {`${gitHub}BlogList-API`}  image={blog} 
            description="Aplicación web desarrollada con React y API RESTful construida con Node.js y Express. Permite  gestionar publicaciones de blog  y cuenta con un sistema básico de autenticación mediante JSON Web Tokens (JWT). "
            />
        </Grid>

      </Grid>
      
          

    </section>
  );
}

export default Projects;