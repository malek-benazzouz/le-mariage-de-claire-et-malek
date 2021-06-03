# TODO

- In all texts, replace '.' by '·' (écriture inclusive)

## Header

- [prio 2] add decorations (hearts?) between nav links
- in mobile view, make header "semi-sticky" (appear on scroll-up)
- in mobile view, when nav is expanded, replace hamburger icon by x icon

## Couple pres

- [prio 1] content: update couples quotes

## Program

- [prio 1] add useful contact numbers

## Design / Style

- add animations + customize style. Ideas:
  - http://preview.themeforest.net/item/onelove-the-elegant-clean-multipurpose-wedding-wordpress-theme/full_screen_preview/20235980
  - https://www.julie-bast.fr/

- Make sure responsiveness is OK everywhere

## Performance

- compress all images and make sure their size is acceptable -> https://www.iloveimg.com/fr/compresser-image
- download google fonts and add them to repo instead of fetching them from google?
- add a pre-loading page while fetching images
- test on slow device + slow connection

# Production

- Fix css files budget issue (ng build --prod issue): it probably comes from `@import "src/styles";`

------------------------------------------------------------------------------

# DONE

- force https redirection -> done via .htaccess file
- fallback to index.html when route not found (https://angular.io/guide/deployment#production-servers) -> via .htaccess
