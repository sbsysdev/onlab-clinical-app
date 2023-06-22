// types
import { Translation } from '@/contexts/core/language';

export const es: Record<Translation, string> = {
    'app.title': 'OnLab-Clinical',
    'app.not-found': 'Página no encontrada 404',
    'app.start': 'Regresar al inicio',
    'theme.os': 'Sistema',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'actions.close': 'Cerrar',
    'actions.reload': 'Recargar',
    'actions.prev': 'Anterior',
    'actions.next': 'Siguiente',
    // authentication module
    // person
    'auth.name.label': 'Nombre',
    'auth.name.placeholder': 'Escriba su nombre',
    'auth.name.required': 'su nombre es requerido',
    'auth.surname.label': 'Apellido',
    'auth.surname.placeholder': 'Escriba su apellido',
    'auth.surname.required': 'su apellido es requerido',
    'auth.sex.label': 'Sexo',
    'auth.sex.required': 'su sexo es requerido',
    'auth.sex.male': 'Hombre',
    'auth.sex.female': 'Mujer',
    'auth.birth.label': 'Fecha de nacimiento',
    'auth.birth.placeholder': 'Seleccione su fecha',
    'auth.birth.required': 'su fecha de nacimiento es requerida',
    'auth.birth.adult': 'usted debe ser mayor de edad',
    'auth.nid.label': 'Documento de identidad',
    'auth.nid.placeholder': 'Escriba su número de documento',
    'auth.nid.required': 'su número de documento es requerido',
    // authentication
    'auth.username.label': 'Nombre',
    'auth.username.placeholder': 'Nombre de usuario',
    'auth.username.required': 'nombre de usuario es requerido',
    'auth.username.start': 'debe empezar con una letra',
    'auth.username.only': 'solo letras, números y guiones bajos "_"',
    'auth.username.min': 'mínimo 3 dígitos & máximo 32 dígitos',
    'auth.password.label': 'Contraseña',
    'auth.password.placeholder': 'Contraseña de usuario',
    'auth.password.required': 'contraseña de usuario es requerida',
    'auth.password.show': 'Mostrar contraseña',
    'auth.password.hide': 'Ocultar contraseña',
    'auth.password.lowercase': 'al menos una minúscula',
    'auth.password.uppercase': 'al menos una mayúscula',
    'auth.password.decimal': 'al menos un número',
    'auth.password.special': 'al menos un carácter especial',
    'auth.password.between': 'mínimo 8 dígitos & máximo 32 dígitos',
    // Sign in view
    'auth.sign-in.title': 'Inicio de sesión',
    'auth.sign-in.sign-in': 'Iniciar sesión',
    'auth.sign-in.sign-up-hint': 'Si aún no dispone de una cuenta, puedes crear una fácilmente',
    'auth.sign-in.sign-up-nav': 'aquí',
    'auth.sign-in.welcome': 'Bienvenido a OnLab-Clinical, área personal de paciente',
    // sign up view
    'auth.sign-up.title': 'Nuevo paciente',
    'auth.sign-up.sign-up': '',
    'auth.sign-up.sign-in-nav': 'inicio de sesión',
    'auth.sign-up.step-1': 'Datos personales',
    'auth.sign-up.step-2': '',
    'auth.sign-up.step-3': '',
};
