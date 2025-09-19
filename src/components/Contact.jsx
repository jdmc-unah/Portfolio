import {  Box,  Button,  Dialog,  DialogTitle,  DialogContent,   
  DialogContentText,  DialogActions,  TextField, Alert,
    CircularProgress,  Backdrop, } from "@mui/material";

import { useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_w44385m"; // reemplaza con tu service ID de EmailJS
const TEMPLATE_ID = "template_contact"; // reemplaza con tu template ID
const PUBLIC_KEY = "3r_rA2J6AprcKWBCz"; // reemplaza con tu public key de EmailJS


const Contact = ({ open, handleClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState(null); // null | true | false

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSuccessResult(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setSuccessResult(false);
      })
      .finally(() => {
        setLoading(false);
        handleClose(); // cierra el formulario principal
      });
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Formulario */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pb: 0 }} variant="h4">
          Formulario de{" "}
          <span style={{ color: "#60a5fa" }}>Contacto</span>
        </DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText gutterBottom>
              Por favor completa la siguiente información y me pondré en
              contacto contigo lo antes posible.
            </DialogContentText>

            <TextField
              value={form.name}
              name="name"
              onChange={handleChange}
              autoFocus
              margin="dense"
              label="Nombre"
              type="text"
              fullWidth
              required
            />
            <TextField
              value={form.email}
              name="email"
              onChange={handleChange}
              sx={{ py: 1 }}
              margin="dense"
              label="Correo"
              type="email"
              fullWidth
              required
            />
            <TextField
              value={form.message}
              name="message"
              onChange={handleChange}
              margin="dense"
              label="Mensaje"
              type="text"
              fullWidth
              multiline
              rows={3}
            />
          </DialogContent>
          <DialogActions sx={{ padding: 3 }}>
            <Button
              sx={{
                textTransform: "none",
                fontSize: 17,
                fontWeight: 500,
              }}
              onClick={handleClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              sx={{
                fontSize: 17,
                color: "#facc15",
                fontWeight: 500,
                textTransform: "none",
              }}
              type="submit"
              variant="contained"
              disabled={loading}
            >
              Enviar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Overlay de carga (siempre encima de todo) */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 20000, // 👈 más alto que los diálogos
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Dialog de éxito o error */}
      <Dialog
        open={successResult !== null}
        onClose={() => setSuccessResult(null)}
        sx={{visibility: successResult !== null ? "visible" : "hidden"  }}
      >
        <DialogTitle>
          {successResult ? "¡Mensaje enviado!" : "Error al enviar"}
        </DialogTitle>
        <DialogContent>
          {successResult ? (
            <Alert severity="success">
              Tu mensaje ha sido enviado con éxito. Te contactaré pronto.
            </Alert>
          ) :  (
            <Alert severity="error">
              Hubo un problema al enviar el mensaje. Intenta nuevamente.
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccessResult(null)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;