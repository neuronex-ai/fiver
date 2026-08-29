# Roteamento por dispositivo

O projeto usa um roteador de apresentação em `src/hooks/useDeviceMode.ts`.

## Regra atual

- **Mobile:** viewport até `767px` → árvore de componentes mobile-first.
- **Tablet/Desktop:** viewport a partir de `768px` → árvore desktop-first/responsiva.

A seleção é feita por `window.matchMedia('(max-width: 767px)')` e `useSyncExternalStore`, permitindo:

- componentes distintos para mobile e desktop;
- atualização ao redimensionar a janela;
- renderização estática/prerender sem acessar `window` no servidor;
- mesma URL e mesma informação essencial nas duas versões.

## SEO

O HTML prerenderizado usa a versão desktop como snapshot de servidor e o cliente troca para a árvore mobile após hidratação quando necessário. O conteúdo principal é equivalente entre versões, evitando perda de informação na indexação mobile-first.

Não há URLs separadas do tipo `m.dominio.com`; site e landing usam uma URL canônica por página.
