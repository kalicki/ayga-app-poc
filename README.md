# Descrição
O App está baseado em Ionic with integração com API REST.

## Estrutura
As configurações de comunicação com a API está na pasta `/src/app/providers/api.ts`

`src/app`
    - Nesta pasta todas as configurações e intergrações de modo global do aplicativo, contém imports, declarations, providers e outras conexões de módulos.

`src/pages`
    - Contém tudo ligado as páginas de exibição, em cada sub-pasta contém html para exibição, scss para estilos e o typescript para se conectar aos providers. Os modules são estrturas para suportar eventos, tais como: paginação.

`src/providers`
    - Está todo meios de comunicação com a API REST, ou seja, as pages se conectam com as providers para requisitar algo.

## Instalação
Para instalar os completos, deve-se executar o comando:
`npm install`

P.S: É importate averiguar se no processo de instalação não ocorreu algum erro em algum complemento

Em caso de teste `localhost` entre dois ambientes simultaneo é necessário habilitar o sistema de proxy em
`ìonic.config.json`, em produção deve ser removido.

## Execução
`ionic serve` este comando irá executar o ionic em `http://localhost:8100/`

## Emulator
TODO
## Build
TODO
# Deploy
TODO