
# CalcApi

Trata-se de uma simples calculadora.

## Tecnologias

- **Express**
- **JWT**
- **Joi**
- **Docker e docker compose**

## Iniciando localmente

Para iniciar esse projeto você precisa obrigatoriamente baixar numa mesma pasta a **[Calc](https://github.com/jeffersonAraujo2012/calc)**.

1. Crie uma pasta qualquer e clone o repositório do front-end:

```bash
  git clone https://github.com/jeffersonAraujo2012/calc.git
```

2. Agora dentro da mesma pasta onde esta o repositório do front-end, clone o repositório do back-end.

```bash
  git clone https://github.com/jeffersonAraujo2012/calcApi.git
```

3. Agora preencha as variáveis de ambiente do front. O arquivo .env.example possui o valor padrão. Se for manter o padrão basta copiar o arquivo e renomer para **.env.local**

4. Agora preencha as variáveis de ambiente do back-end. O arquivo **.env.example** possui o valor padrão de teste. Se for manter basta copiar o arquivo e renomer a cópia como **.env**

5. Agora, estando na raiz do repositório do back execute o seguinte comando:

```bash
  sudo docker compose up -d
```

6. O front da aplicação subirá em localhost:3000 e o back em localhost:5001


