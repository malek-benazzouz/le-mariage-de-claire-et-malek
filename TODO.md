# TODO

## Header

- add decorations (hearts?) between nav links
- in mobile view, make header "semi-sticky" (appear on scroll-up)
- in mobile view, when nav is expanded, replace hamburger icon by x icon

## Section titles

- add decoration around section titles

## Carousel

## Countdown

## Intro

## Couple pres

- content: update couples quotes
- add background image (e.g. olive motif)?

## Program

- add useful contact numbers

## Accommodation

## RSVP

- add background image (e.g. olive motif)?

## Money pot

## Bonus image

- add picture frame to image
- [bonus] add other pictures using this:
  https://www.shutterstock.com/image-vector/set-vintage-photo-frame-adhesive-tape-560559439?id=560559439&irclickid=RSDRXVTnRxyLUbHwUx0Mo3EtUkB2EwQXgw0j1M0&irgwc=1&utm_medium=Affiliate&utm_campaign=Free%20SVG&utm_source=2022575&utm_term=&c3ch=Affiliate&c3nid=IR-2022575

## Footer

- content: find and add footer quote

# Admin page

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
