
// Ser autenticavel significa ter o método autenticar (Duck typing)

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false;
    }
    // aula que gerou esse método: https://cursos.alura.com.br/course/javascript-polimorfismo/task/74137
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function;

    }
}