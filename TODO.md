# TODO

- [Prio] Get ready for production:
  - fix css files budget issue (ng build --prod issue): it probably comes from `@import "src/styles";`
  - perf: compress all images and make sure their size is acceptable -> https://www.iloveimg.com/fr/compresser-image
  - perf: download google fonts and add them to repo instead of fetching them from google?

- [PRD] Load in production:
  - load webapp in both o2switch and firebase hosting (ideally move owned .com domain name to firebase hosting)
  - post-prod: test on different devices (mobile, slower laptop) + test with mobile network

# Bonus

- header: add decorations (hearts?) between nav links
- header: in mobile view, make header "semi-sticky" (appear on scroll-up)
- header: in mobile view, when nav is expanded, replace hamburger icon by x icon
- design: add animations - ideas:
  - http://preview.themeforest.net/item/onelove-the-elegant-clean-multipurpose-wedding-wordpress-theme/full_screen_preview/20235980
  - https://www.julie-bast.fr/

------------------------------------------------------------------------------

# DONE

- force https redirection -> done via .htaccess file
- fallback to index.html when route not found (https://angular.io/guide/deployment#production-servers) -> via .htaccess
