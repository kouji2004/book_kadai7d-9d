import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import jQuery from "jquery"
import "popper.js"
import "bootstrap"

import '@fortawesome/fontawesome-free/js/all';
import "../stylesheets/application"


window.$ = window.jQuery = require('jquery');
require('packs/raty')

Rails.start()
Turbolinks.start()
ActiveStorage.start()