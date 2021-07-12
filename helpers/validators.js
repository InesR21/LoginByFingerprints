export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "Email no puede estar vacío.";
  if (!re.test(email)) return 'Ooops! Necesitamos un email valido.';
  return '';
}

export function nameValidator(name) {
  if (!name) return "Nombre no puede estar vacío.";
  return '';
}
export function passwordValidator(password) {
  if (!password) return "Contraseña no puede estar vacío.";
  if (password.length < 5)
    return 'La contraseña debe tener al menos 5 caracteres.';
  return '';
}
