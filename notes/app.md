# **Server**
## - komponenty w folderze **app** są server side
## - Żeby używać komponentów server side na client side, musisz przekazać je jako prop lub children
## - fetchowanie na serverze : https://beta.nextjs.org/docs/data-fetching/fetching
## - używaj server side tam gdzie się da, dopiero kiedy trzeba zrobić jakąś interakcję użyj client side
## - używaj do :
- fetchowania
- sensitive info
- dużych libek


# **Client**
## - komponenty w folderze **pages** są client side
## - "use client" na samej górze pliku, żeby był client side
## - te pliki nie muszą być w tym pages, mogą być gdzielkolwiek tylko muszą mieć "use client"
## - używaj "use client", kiedy component zawiera hooki takie jak useState/Effect.
## - używaj do :
- reaktywności (onClick itp)
- hooków i lifecycle (useState, useEffect)
- przeglądarkowe API (window, navigation)
- custom hooki
